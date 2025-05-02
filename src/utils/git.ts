import * as git from 'isomorphic-git';
import http from 'isomorphic-git/http/web';
import * as fs from 'fs';

export async function initializeRepo() {
  await git.init({ fs, dir: '.' });
  await git.add({ fs, dir: '.', filepath: '.' });
  await git.commit({
    fs,
    dir: '.',
    message: 'Initial commit',
    author: {
      name: 'Your Name',
      email: 'your.email@example.com'
    }
  });
}

export async function pushToGithub(url: string) {
  await git.push({
    fs,
    http,
    dir: '.',
    remote: 'origin',
    ref: 'main',
    url: url
  });
}