//HTTP モジュールを読み込む
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//HTTP サーバーを作成し、3000 番ポートでリクエストを待機します。
const server = http.createServer((req, res) => {

  //HTTP ステータスとコンテンツタイプを持つ応答 HTTP ヘッダーを設定します。
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//3000 番ポートでリクエストを待機し、受信したときにログ出力するコールバック関数
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
