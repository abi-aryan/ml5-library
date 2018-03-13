import * as dl from 'deeplearn';
import ImageClassifier from './ImageClassifier/index';
import KNNImageClassifier from './KNNImageClassifier/index';
import LSTMGenerator from './LSTM/index';
import Word2Vec from './Word2vec/index';
import StyleTransfer from './StyleTransfer/index';
import * as imageUtils from './utils/imageUtilities';

module.exports = {
  ImageClassifier,
  KNNImageClassifier,
  LSTMGenerator,
  StyleTransfer,
  Word2Vec,
  ...imageUtils,
  dl,
};
