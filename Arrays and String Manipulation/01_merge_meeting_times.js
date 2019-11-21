function mergeRanges(meetings) {
  // Merge meetings range
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime
  });
  
  const mergedMeetings = [sortedMeetings[0]];
  
  for (let i=1; i<sortedMeetings.length; i++){
    const currentMeeting = sortedMeetings[i];
    const lastMeeting = mergedMeetings[mergedMeetings.length -1];
    
    if (currentMeeting.startTime <= lastMeeting.endTime){
      lastMeeting.endTime = Math.max(lastMeeting.endTime, currentMeeting.endTime)
    } else {
      mergedMeetings.push(currentMeeting)
    }
  }
  return mergedMeetings; 
}