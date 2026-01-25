function getAverageGrade(scores) {
  if (!scores || scores.length === 0) {
    return null;
  }

  const scoresSum = scores.reduce((sum, score) => sum + score, 0);
  const averageScore = scoresSum / scores.length;

  if (averageScore >= 97) return "A+";
  else if (averageScore >= 93) return "A";
  else if (averageScore >= 90) return "A-";
  else if (averageScore >= 87) return "B+";
  else if (averageScore >= 83) return "B";
  else if (averageScore >= 80) return "B-";
  else if (averageScore >= 77) return "C+";
  else if (averageScore >= 73) return "C";
  else if (averageScore >= 70) return "C-";
  else if (averageScore >= 67) return "D+";
  else if (averageScore >= 63) return "D";
  else if (averageScore >= 60) return "D-";
  else return "F";
}
    