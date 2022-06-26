import gameConfig from 'config/gameConfig.json';

function fetchGameConfig() {
  return new Promise((res) => {
    // setTimeout(() => res(gameConfig), 2000);
    res(gameConfig);
  });
}

export { fetchGameConfig };
