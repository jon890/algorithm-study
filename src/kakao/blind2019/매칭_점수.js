function solution(word, pages) {
  const not_alphabet = /[^a-zA-Z]/g;

  const pattern = `\\b${word}\\b`;
  const findWordRegExp = new RegExp(pattern, 'gi');

  const urlTagRegExp = /<meta property="og:url"(.+?)\/>/g;
  const linkTagRegExp = /<a href=(.+?)">/g;
  const urlRegExp = /"https:\/\/(.*?)"/g;

  const parsedPages = pages
    .map((page, index) => {
      // 기본 점수 계산
      // 알파벳이 아닌 문자들을 공백으로 치환
      const convertedPage = page.replace(not_alphabet, ' ');
      const findWords = convertedPage.match(findWordRegExp);

      const urlTag = page.match(urlTagRegExp);
      // todo kbt : 지금은 전체적으로 url에 ""를 붙어있지만 나중에 필요하면 제거
      let [url] = urlTag[0].match(urlRegExp);

      const linkTags = page.match(linkTagRegExp);
      const linkUrls = linkTags
        ? linkTags.map((linkTag) => linkTag.match(urlRegExp)[0])
        : [];

      return {
        index,
        url,
        linkUrls,
        baseScore: findWords ? findWords.length : 0,
        outerLinkScore: linkUrls.length,
      };
    })
    .map((page, _, array) => {
      const { url } = page;

      // 링크 점수 계산
      // 나를 링크로 가지고 있는 페이지를 찾는다
      const linkScore = array
        .filter(({ linkUrls }) => linkUrls.includes(url))
        .reduce(
          (acc, { baseScore, outerLinkScore }) =>
            acc + baseScore / outerLinkScore,
          0,
        );

      return {
        ...page,
        linkScore,
      };
    })
    .sort((a, b) => {
      // 매칭점수순으로 정렬
      const aMatchingScore = a.linkScore + a.baseScore;
      const bMatchingScore = b.linkScore + b.baseScore;

      if (aMatchingScore !== bMatchingScore) {
        return bMatchingScore - aMatchingScore;
      } else {
        return a.index - b.index;
      }
    });

  return parsedPages[0].index;
}

/**
 * 2021-06-29
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (1.23ms, 30.1MB)
테스트 2 〉	통과 (1.06ms, 30.1MB)
테스트 3 〉	통과 (1.17ms, 29.9MB)
테스트 4 〉	통과 (1.10ms, 30.3MB)
테스트 5 〉	통과 (1.24ms, 30.2MB)
테스트 6 〉	통과 (1.15ms, 30.2MB)
테스트 7 〉	통과 (2.43ms, 30.1MB)
테스트 8 〉	통과 (1.07ms, 30.3MB)
테스트 9 〉	통과 (1.22ms, 30.2MB)
테스트 10 〉	통과 (1.22ms, 30.3MB)
테스트 11 〉	통과 (0.89ms, 30.3MB)
테스트 12 〉	통과 (0.91ms, 30.3MB)
테스트 13 〉	통과 (0.91ms, 30.3MB)
테스트 14 〉	통과 (1.00ms, 30.2MB)
테스트 15 〉	통과 (0.97ms, 30.2MB)
테스트 16 〉	통과 (0.70ms, 30MB)
테스트 17 〉	통과 (0.90ms, 30.3MB)
테스트 18 〉	통과 (0.54ms, 30.1MB)
테스트 19 〉	통과 (0.64ms, 30.2MB)
테스트 20 〉	통과 (1.18ms, 30.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
