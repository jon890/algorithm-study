package leetcode

/**
 * 290. Word Pattern
 *
 * pattern와 스트링이 있다
 * s에 같은 패턴을 찾아라
 *
 */
class WordPattern {

    fun wordPattern(pattern: String, s: String): Boolean {
        val map = mutableMapOf<Char, String>()
        val uniqueWords = mutableSetOf<String>()

        var result = true
        val splits = s.split(" ")

        if (pattern.length != splits.size) {
            return false
        }

        splits.forEachIndexed { index, word ->
            val char = pattern[index]

            if (map.containsKey(char)) {
                if (map[char] != word) {
                    result = false
                    return@forEachIndexed
                }
            } else {
                if (uniqueWords.contains(word)) {
                    result = false
                    return@forEachIndexed
                }

                map[char] = word
                uniqueWords.add(word)
            }
        }

        return result
    }

    fun testTemplate(pattern: String, s: String, answer: Boolean) {
        if (wordPattern(pattern, s) == answer) {
            println("정답입니다")
        } else {
            println("오답입니다")
        }

    }
}

fun main() {
    WordPattern().let {
        it.testTemplate("abba", "dog cat cat dog", true)
        it.testTemplate("abba", "dog cat cat fish", false)
        it.testTemplate("aaaa", "dog cat cat dog", false)
        it.testTemplate("abba", "dog dog dog dog", false)
        it.testTemplate("aba", "cat cat cat dog", false)
    }
}