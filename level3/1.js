// 같은 장르 끼리 묶기
// 묶인 노래들을 재생순으로 정렬
// 노래를 2개까지 자르는 작업 필요

function solution(genres, plays) {
    // hash table
    const genreMap = new Map();

    genres.map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
        const data = genreMap.get(genre) || { total: 0, songs: [] }
        genreMap.set(genre, {
            total: data.total + play,
            songs: [...data.songs, { play, index }]
            .sort((a,b) => b.play- a.play)
            .slice(0,2)
        })

    })
    return [...genreMap.entries()].sort((a,b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song => song.index))
}

