/**
 * https://leetcode.com/problems/word-ladder/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    let memo = []
    let hash = {}
    return match(beginWord, 0)
    function match(word, step=0) {
        if(word === endWord) return step;
        for(let i = 0; i < endWord.length; i++) {
            let newWord = word.slice(0,i) + endWord[i] + word.slice(i+1)
            if(wordSet.has(newWord) && !hash[newWord]) {
                hash[newWord] = 1
                match(newWord, step++)
            }
        }
        
        return step
    }
};

console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))