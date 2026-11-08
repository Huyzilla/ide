
 // Day 24 — Ngăn xếp, hàng đợi và loang ma trận
// 3 bài chính + 1 bài bonus.
// Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day24-01",
    "day": 24,
    "title": "Kiểm tra dãy dấu ngoặc hợp lệ",
    "description": "Cho t chuỗi, mỗi chuỗi chỉ gồm các ký tự '(', ')', '[', ']', '{', '}'. Một chuỗi được gọi là hợp lệ nếu mọi dấu ngoặc mở đều được đóng bằng đúng loại dấu ngoặc tương ứng và các cặp dấu ngoặc được lồng nhau đúng thứ tự. Ví dụ: '([])' và '{[()]}' hợp lệ, nhưng '([)]' và '(()' không hợp lệ. Hãy kiểm tra từng chuỗi. Cần tìm cách xử lý hiệu quả mà không phải liên tục xóa ký tự trong chuỗi.",
    "inputDescription": "Dòng 1: số nguyên t. t dòng tiếp theo, mỗi dòng chứa một chuỗi dấu ngoặc không rỗng và không chứa khoảng trắng.",
    "outputDescription": "Với mỗi chuỗi, in YES nếu chuỗi hợp lệ, ngược lại in NO. Mỗi kết quả trên một dòng.",
    "constraints": "1 ≤ t ≤ 1000; 1 ≤ độ dài mỗi chuỗi ≤ 200000; tổng độ dài tất cả chuỗi không vượt quá 200000.",
    "samples": [
      {
        "input": "6\n()[]{}\n([{}])\n([)]\n(()\n{}[]\n][",
        "output": "YES\nYES\nNO\nNO\nYES\nNO"
      }
    ],
    "tests": [
      {
        "input": "6\n()[]{}\n([{}])\n([)]\n(()\n{}[]\n][",
        "output": "YES\nYES\nNO\nNO\nYES\nNO"
      },
      {
        "input": "5\n(\n)\n[]\n{}\n()()",
        "output": "NO\nNO\nYES\nYES\nYES"
      },
      {
        "input": "1\n{[()()]}",
        "output": "YES"
      },
      {
        "input": "4\n((()))\n{[(])}\n[][]\n([[]])",
        "output": "YES\nNO\nYES\nYES"
      },
      {
        "input": "3\n((((()))))\n()][()\n[{()}]",
        "output": "YES\nNO\nYES"
      },
      {
        "input": "5\n[]{}()\n{[]}\n([{}])\n({[})\n[[]]",
        "output": "YES\nYES\nYES\nNO\nYES"
      }
    ]
  },
  {
    "id": "day24-02",
    "day": 24,
    "title": "Mô phỏng hàng đợi",
    "description": "Một hệ thống xử lý công việc theo nguyên tắc đến trước được phục vụ trước. Ban đầu hàng đợi rỗng. Có q lệnh thuộc bốn loại: PUSH x (thêm x vào cuối hàng đợi), POP (xóa phần tử đầu nếu hàng đợi không rỗng), FRONT (xem giá trị phần tử đầu), SIZE (xem số phần tử hiện có). Với lệnh FRONT, nếu hàng đợi rỗng thì in EMPTY. Lệnh POP trên hàng đợi rỗng không làm thay đổi gì. Hãy thực hiện các lệnh theo đúng thứ tự xuất hiện.",
    "inputDescription": "Dòng 1: số nguyên q. q dòng tiếp theo, mỗi dòng là một trong bốn lệnh: PUSH x, POP, FRONT hoặc SIZE.",
    "outputDescription": "Với mỗi lệnh FRONT, in giá trị đầu hàng đợi hoặc EMPTY nếu rỗng. Với mỗi lệnh SIZE, in số phần tử hiện có. Mỗi kết quả trên một dòng. Các lệnh PUSH và POP không tạo ra kết quả.",
    "constraints": "1 ≤ q ≤ 200000; -10^9 ≤ x ≤ 10^9; các lệnh luôn thuộc bốn loại hợp lệ.",
    "samples": [
      {
        "input": "12\nPUSH 5\nPUSH 7\nFRONT\nSIZE\nPOP\nFRONT\nPUSH -3\nSIZE\nPOP\nPOP\nFRONT\nSIZE",
        "output": "5\n2\n7\n2\nEMPTY\n0"
      }
    ],
    "tests": [
      {
        "input": "12\nPUSH 5\nPUSH 7\nFRONT\nSIZE\nPOP\nFRONT\nPUSH -3\nSIZE\nPOP\nPOP\nFRONT\nSIZE",
        "output": "5\n2\n7\n2\nEMPTY\n0"
      },
      {
        "input": "5\nFRONT\nPOP\nSIZE\nPUSH 9\nFRONT",
        "output": "EMPTY\n0\n9"
      },
      {
        "input": "8\nPUSH 1\nPUSH 1\nPUSH 2\nPOP\nFRONT\nSIZE\nPOP\nFRONT",
        "output": "1\n2\n2"
      },
      {
        "input": "9\nPUSH -1000000000\nFRONT\nPUSH 1000000000\nPOP\nFRONT\nSIZE\nPOP\nFRONT\nSIZE",
        "output": "-1000000000\n1000000000\n1\nEMPTY\n0"
      },
      {
        "input": "7\nPUSH 3\nPOP\nPOP\nPUSH 4\nPUSH 5\nPOP\nFRONT",
        "output": "5"
      },
      {
        "input": "4\nSIZE\nFRONT\nPUSH 1\nSIZE",
        "output": "0\nEMPTY\n1"
      }
    ]
  },
  {
    "id": "day24-03",
    "day": 24,
    "title": "Đếm vùng liên thông trong ma trận",
    "description": "Cho một ma trận gồm n hàng và m cột, mỗi ô chứa ký tự '0' hoặc '1'. Ô có giá trị '1' là ô được tô màu, ô có giá trị '0' là ô trống. Hai ô được tô màu được coi là kề nhau nếu chúng chung một cạnh (trên, dưới, trái hoặc phải). Một vùng liên thông là tập các ô được tô màu mà từ bất kỳ ô nào trong vùng đều có thể đi đến các ô còn lại trong cùng vùng bằng cách di chuyển qua những ô được tô màu và chỉ theo bốn hướng. Hãy đếm số vùng liên thông và tìm số ô của vùng lớn nhất. Nếu không có ô nào được tô màu, cả hai kết quả đều bằng 0. Lưu ý: hai ô chỉ chạm nhau ở góc không được coi là kề nhau.",
    "inputDescription": "Dòng 1: n m. n dòng tiếp theo, mỗi dòng là một chuỗi gồm đúng m ký tự '0' hoặc '1', không có khoảng trắng giữa các ký tự.",
    "outputDescription": "In hai số nguyên trên một dòng: số vùng liên thông và kích thước vùng lớn nhất.",
    "constraints": "1 ≤ n,m ≤ 1000; n*m ≤ 1000000. Nên sử dụng hàng đợi để duyệt vùng, tránh đệ quy quá sâu khi ma trận lớn.",
    "samples": [
      {
        "input": "4 5\n11001\n11001\n00100\n00011",
        "output": "4 4"
      }
    ],
    "tests": [
      {
        "input": "4 5\n11001\n11001\n00100\n00011",
        "output": "4 4"
      },
      {
        "input": "1 1\n0",
        "output": "0 0"
      },
      {
        "input": "1 1\n1",
        "output": "1 1"
      },
      {
        "input": "3 3\n101\n010\n101",
        "output": "5 1"
      },
      {
        "input": "3 4\n1111\n1111\n1111",
        "output": "1 12"
      },
      {
        "input": "4 6\n100001\n001100\n001100\n100001",
        "output": "5 4"
      },
      {
        "input": "1 8\n10111001",
        "output": "3 3"
      }
    ]
  },
  {
    "id": "day24-04",
    "day": 24,
    "title": "BONUS — Tìm đường đi ngắn nhất trong mê cung",
    "description": "Cho một mê cung hình chữ nhật gồm n hàng và m cột. Mỗi ô có thể là '.' (đường đi được), '#' (vật cản), 'S' (vị trí xuất phát) hoặc 'T' (đích đến). Có đúng một ô S và đúng một ô T. Từ một ô, bạn chỉ được di chuyển sang một trong bốn ô chung cạnh: trên, dưới, trái, phải. Không được đi ra ngoài mê cung hoặc đi vào ô vật cản. Mỗi lần di chuyển sang ô kề bên được tính là một bước. Hãy tìm số bước ít nhất để đi từ S đến T. Nếu không thể đến đích, in -1. Vì mê cung có thể rất lớn, cần tránh việc thử mọi đường đi bằng quay lui.",
    "inputDescription": "Dòng 1: n m. n dòng tiếp theo, mỗi dòng chứa đúng m ký tự thuộc tập '.', '#', 'S', 'T', không có khoảng trắng.",
    "outputDescription": "In số bước ít nhất cần đi từ S đến T. Nếu không tồn tại đường đi hợp lệ, in -1.",
    "constraints": "1 ≤ n,m ≤ 1000; 2 ≤ n*m ≤ 1000000; có đúng một ô S và một ô T ở hai vị trí khác nhau; các ô còn lại chỉ chứa '.' hoặc '#'.",
    "samples": [
      {
        "input": "4 5\nS...#\n##..#\n...#.\n.#..T",
        "output": "7"
      }
    ],
    "tests": [
      {
        "input": "4 5\nS...#\n##..#\n...#.\n.#..T",
        "output": "7"
      },
      {
        "input": "1 2\nST",
        "output": "1"
      },
      {
        "input": "2 2\nS#\n#T",
        "output": "-1"
      },
      {
        "input": "3 3\nS..\n...\n..T",
        "output": "4"
      },
      {
        "input": "4 4\nS###\n...#\n##.#\n##.T",
        "output": "6"
      },
      {
        "input": "3 5\nS#..T\n.#.#.\n.....",
        "output": "8"
      },
      {
        "input": "4 6\nS....#\n####.#\nT....#\n......",
        "output": "10"
      }
    ]
  }
];
