---
title: SQLiteで同時書き込みが出来るようになりました
description: SQLiteに有りそうでなかった機能が追加されました 🎉
date: Aug 1 2023
lang: ja
author: kanadesh
---

僕はこれまでデスクトップアプリの開発するときのストレージとして、また Cloudflare D1 等のクラウド製品で SQLite を結構愛用してきたんですが、そんな SQLite にまさかのニュースが飛び込んできました。

> When a write-transaction is opened with "BEGIN CONCURRENT", actually locking the database is deferred until a COMMIT is executed. This means that any number of transactions started with BEGIN CONCURRENT may proceed concurrently. The system uses optimistic page-level-locking to prevent conflicting concurrent transactions from being committed.

> BEGIN CONCURRENT によって書き込みトランザクションが開始されると、COMMIT が実行されるまでデータベースのロックは延期されます。これにより BEGIN CONCURRENT で開始されたトランザクションは複数同時に実行できるようになります。
> システムは楽観的ページレベルロッキングにより競合している同時トランザクションがコミットされるのを防ぎます。

とのこと。カンタンにいうと SQLite が同時書き込みをサポートしたとのことです。

## これまでの SQLite について

これまで、SQLite は同時接続こそある程度できていたものの、流石に書き込みまでは同時にサポートすることはできませんでした。
が、このアップデートである程度制約はありますが SQLite でもトランザクションを同時多発的に行えるようになったらしいです。
単純に考えてとてもヤバイです。

## 一部デメリット

[Publickey さんの記事](https://www.publickey1.jp/blog/23/sqlitebegin_concurrent.html)を見てみると、以下のようなことが書かれていました。

> 1）異なるテーブル・セットに書き込む 2 つのトランザクションが衝突することはない。
> 2）同じテーブルまたはインデックスに書き込む 2 つのトランザクションが衝突するのは、キー（主キーまたはインデックス行）の値がかなり近い場合だけである。

ということです。一部衝突する可能性もあるにはあるそうですが、普通に実用出来そうですね。

## SQLite!!な世界へ

SQLite はその特性上、これまでは Android などのデータストアや、その他にもローカルにデータを保存するユースケースにのみ用いられてきました。
ですが、少し前に出た Cloudflare D1 や、rqlite、Litestream などでかなりその人気に 🔥 がついてきたように思います。
また、本件の機能追加で、例えばレンタルサーバなどでシステム運用している人も、わざわざ外部の DB を利用したり、オンプレミスで MySQL や PostgreSQL などを管理したりする必要無く、直で SQLite のデータベースを使うことができます。(セキュリティはちょっと怖いですが)

これまで以上に SQLite の需要が高まってきそうな気がして、本当に楽しみです。
