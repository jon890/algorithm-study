package dev_matching.backend2022.test

class Solution2 {
    companion object {
        val dx = arrayOf(-1, 0, 1, 0)
        val dy = arrayOf(0, -1, 0, 1)
    }

    fun solution(maps: Array<String>): Int {
        // todo 간략하게..
        val visited = mutableListOf<MutableList<Boolean>>()
        for (i in maps.indices) {
            val list = mutableListOf<Boolean>()
            for (j in maps[i].indices) {
                list.add(false)
            }
            visited.add(list)
        }

        val result = mutableListOf<String>()
        for (i in maps.indices) {
            for (j in maps[i].indices) {
                if (maps[i][j] == '.' || visited[i][j]) continue

                val adjacent = mutableListOf<Char>()
                dfs(i, j, maps, visited, adjacent)
                result.add(adjacent.joinToString(""))
            }
        }

        val answer = result.asSequence()
            .map { adjacentToMap(it) }
            .map { handleWar(it).entries }
            .flatten()
            .groupBy { it.key }
            .map { it.key to it.value.sumOf { it.value } }.toList()
            .toMap()
            .entries.maxByOrNull { it.value }!!.value
        return answer
    }

    private fun handleWar(adjacent: MutableMap<Char, Int>): Map<Char, Int> {
        val winner = adjacent.entries.sortedWith { o1, o2 ->
            if (o1.value == o2.value) {
                o2.key - o1.key
            } else {
                o2.value - o1.value
            }
        }.first()

        val sum = adjacent.entries.filter { it.value < winner.value }.sumOf { it.value }
        adjacent.forEach { (key, value) ->
            if (value < winner.value) {
                adjacent[key] = 0
            }
        }
        adjacent[winner.key] = winner.value + sum
        return adjacent.filter { it.value != 0 }
    }

    /**
     * 인접한 땅의 문자열을
     * 국가 - 카운트로 매핑
     */
    private fun adjacentToMap(s: String): MutableMap<Char, Int> {
        val map = hashMapOf<Char, Int>()
        for (i in s.indices) {
            val c = s[i]
            map[c] = map[c]?.plus(1) ?: 1
        }
        return map
    }

    /**
     * 영토를 찾는 dfs
     */
    private fun dfs(
        x: Int,
        y: Int,
        maps: Array<String>,
        visited: List<MutableList<Boolean>>,
        adjacent: MutableList<Char>
    ) {
        adjacent.add(maps[x][y])
        visited[x][y] = true

        for (i in dx.indices) {
            val nextX = x + dx[i]
            val nextY = y + dy[i]

            if (nextX < 0 || nextY < 0 || nextX >= maps.size || nextY >= maps[0].length) {
                continue
            } else if (maps[nextX][nextY] != '.' && !visited[nextX][nextY]) {
                dfs(nextX, nextY, maps, visited, adjacent)
            }
        }
    }
}

fun main(args: Array<String>) {
    val obj = Solution2()
//    obj.solution(arrayOf("AABCA.QA", "AABC..QX", "BBBC.Y..", ".A...T.A", "....EE..", ".M.XXEXQ", "KL.TBBBQ"))
    obj.solution(arrayOf("XY..", "YX..", "..YX", ".AXY"))
}