# fitness pal

## 環境構築

ローカルのSupabase環境を初期化する。
```
npx supabase init
```

ローカル環境のAPIサーバーを立ち上げる。
```
npx supabase start
```

ローカル環境をリモートのプロジェクトとリンクする。
```
npx supabase link --project-ref <Project SettingsのReference ID>
```

リモートのSupaseプロジェクトのDBから、スキーマの変更をマイグレーションファイルとしてpullする。
```
npx supabase db pull
```

ペンディング中のマイグレーションファイルを実行する。
```
npx supabase migration up
```

## .envの設定値


## ローカル環境リソースの各アクセス先
ダッシュボード: http://localhost:54323
supabaseクライアントに設定するsupabaseUrl: http://localhost:54321

その他情報については、以下コマンドで確認できる。
```
npx supabase status
```
