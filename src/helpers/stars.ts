export function generateScoreTemplate(score: number) {
    let scoreTemplate = '';
    if (score === 0) {
        scoreTemplate = `<li class="score__star">
                    <i class="icon--score far fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score far fa-star" title="5/5"></i>
                  </li>`;
        return scoreTemplate;
    }
    if (score > 0) {
        for (let i = 0; i < score; i++) {
            scoreTemplate += ` <li class="score__star">
                    <i class="icon--score fas fa-star" title="${i + 1}/5"></i>
                  </li>`;
        }
        return scoreTemplate;
    }
}
