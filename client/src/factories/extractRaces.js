export default text => {
  let matchUp = text.split('v');
  let playerRaces = matchUp[0].split('').map(race => {
    switch (race) {
      case 'P':
        return 'protoss';
      case 'T':
        return 'terran';
      case 'Z':
        return 'zerg';
    }
  });
  let opponentRaces = matchUp[1].split('').map(race => {
    switch (race) {
      case 'P':
        return 'protoss';
      case 'T':
        return 'terran';
      case 'Z':
        return 'zerg';
    }
  });
  return { playerRaces, opponentRaces };
};
