// Day 10 — String (chuỗi ký tự)
// Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day10-01",
    "day": 10,
    "title": "Đếm số lần xuất hiện của ký tự",
    "description": "Cho một chuỗi S và một ký tự c. Hãy đếm số lần c xuất hiện trong S. Phân biệt chữ hoa và chữ thường. Chuỗi S có thể chứa dấu cách hoặc rỗng. Nên dùng getline() để đọc nguyên dòng.",
    "inputDescription": "Dòng 1: chuỗi S (có thể rỗng). Dòng 2: một ký tự c không phải khoảng trắng.",
    "outputDescription": "In một số nguyên là số lần xuất hiện của c trong S.",
    "constraints": "0 ≤ |S| ≤ 100000; S chỉ gồm ký tự ASCII in được; c là một ký tự không phải khoảng trắng.",
    "samples": [
      {
        "input": "banana\na",
        "output": "3"
      }
    ],
    "tests": [
      {
        "input": "banana\na",
        "output": "3"
      },
      {
        "input": "ABCabc\nA",
        "output": "1"
      },
      {
        "input": "  a a   \na",
        "output": "2"
      },
      {
        "input": "\na",
        "output": "0"
      },
      {
        "input": "zzzzz\nz",
        "output": "5"
      }
    ]
  },
  {
    "id": "day10-02",
    "day": 10,
    "title": "Kiểm tra chuỗi đối xứng",
    "description": "Một chuỗi được gọi là đối xứng nếu đọc từ trái sang phải hay phải sang trái đều giống nhau. Hãy kiểm tra chuỗi S. Phân biệt chữ hoa/chữ thường và coi dấu cách là ký tự bình thường. Chuỗi rỗng được xem là đối xứng.",
    "inputDescription": "Một dòng chứa chuỗi S, có thể chứa khoảng trắng hoặc rỗng.",
    "outputDescription": "In YES nếu S đối xứng, ngược lại in NO.",
    "constraints": "0 ≤ |S| ≤ 100000; chỉ gồm ký tự ASCII in được.",
    "samples": [
      {
        "input": "abba",
        "output": "YES"
      }
    ],
    "tests": [
      {
        "input": "abba",
        "output": "YES"
      },
      {
        "input": "abca",
        "output": "NO"
      },
      {
        "input": "Aba",
        "output": "NO"
      },
      {
        "input": "a b a",
        "output": "YES"
      },
      {
        "input": "",
        "output": "YES"
      }
    ]
  },
  {
    "id": "day10-03",
    "day": 10,
    "title": "Chuẩn hóa họ tên",
    "description": "Cho một dòng họ tên chỉ gồm chữ cái tiếng Anh và dấu cách. Hãy loại khoảng trắng thừa ở đầu/cuối, thay nhiều khoảng trắng liên tiếp bằng một khoảng trắng. Mỗi từ viết hoa chữ cái đầu, các chữ cái còn lại viết thường.",
    "inputDescription": "Một dòng chứa chuỗi S (có thể rỗng hoặc chỉ có khoảng trắng).",
    "outputDescription": "In họ tên đã chuẩn hóa. Nếu không có từ nào, in dòng trống.",
    "constraints": "0 ≤ |S| ≤ 100000; S chỉ gồm A–Z, a–z và dấu cách.",
    "samples": [
      {
        "input": "   nGUYEN    vaN    a   ",
        "output": "Nguyen Van A"
      }
    ],
    "tests": [
      {
        "input": "   nGUYEN    vaN    a   ",
        "output": "Nguyen Van A"
      },
      {
        "input": "hello   WORLD",
        "output": "Hello World"
      },
      {
        "input": "   ",
        "output": ""
      },
      {
        "input": "  a B c  ",
        "output": "A B C"
      },
      {
        "input": "lAP  trINH  cPP",
        "output": "Lap Trinh Cpp"
      }
    ]
  },
  {
    "id": "day10-04",
    "day": 10,
    "title": "BONUS — Xóa ký tự lặp liên tiếp",
    "description": "Cho một chuỗi S. Hãy tạo chuỗi T bằng cách giữ lại đúng một ký tự đại diện cho mỗi nhóm ký tự giống nhau đứng liên tiếp. Không thay đổi thứ tự các nhóm; phân biệt chữ hoa và chữ thường.",
    "inputDescription": "Một dòng chứa chuỗi S (có thể rỗng).",
    "outputDescription": "In chuỗi T sau khi rút gọn. Nếu S rỗng, in dòng trống.",
    "constraints": "0 ≤ |S| ≤ 100000; S chỉ gồm ký tự ASCII in được.",
    "samples": [
      {
        "input": "aaabbccaaa",
        "output": "abca"
      }
    ],
    "tests": [
      {
        "input": "aaabbccaaa",
        "output": "abca"
      },
      {
        "input": "xxxyzzzz",
        "output": "xyz"
      },
      {
        "input": "abba",
        "output": "aba"
      },
      {
        "input": "abc",
        "output": "abc"
      },
      {
        "input": "",
        "output": ""
      }
    ]
  }
];
