import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import bodyParser from 'body-parser';
import webpackConfig from '../webpack-config.js';
import mongoose from 'mongoose';

import appRouter from './routes/appRouter';
import apiRouter from './routes/apiRouter';


const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;
const port = isProduction ? (process.env.PORT || 80) : 3000;

const app = express();

const staticPath = path.join(__dirname, '../');
const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/tester';

mongoose.connect(mongoDB);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

appRouter(app, express, staticPath);
apiRouter(app, express);

app.use(express.static(staticPath));

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Port 3000 and 3001`);
});

if (isDeveloping) {
  const devServer = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    inline: true,
    hot: true,
    quiet: true,
    noInfo: false,
    stats: { colors: true },
    proxy: [
      {
        path: '*',
        target: 'http://localhost:3000',
        ws: true,
      }
    ]
  });

  devServer.listen(3001, 'localhost', err => {
    if (err) {
      console.log(err);
    }
  });
}
