package programmers.practice


fun main(args: Array<String>) {
    val (a, b) = readLine()!!.split(' ').map(String::toInt)
    (1..b).forEach { _ ->
        (1..a).forEach { _ ->
            print("*")
        }
        println("")
    }
}

// a * b 별 찍기