function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length
  let seenMovieLengths = new Set();
  for (let i=0; i<movieLengths.length; i++){
    let firstMovie = movieLengths[i];
    let secondMovieLength = flightLength - firstMovie;
    if (seenMovieLengths.has(secondMovieLength)){
      return true;
    };
    seenMovieLengths.add(firstMovie);
  }
  return false;
}
