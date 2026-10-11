// Day 12 — Stringstream (tách từ)
// Mỗi bài có samples và ít nhất 4 tests.

export default [
  {
    "id": "day12-01",
    "day": 12,
    "title": "Tách từ bằng Stringstream",
    "description": "Cho một dòng văn bản chỉ gồm các từ (không có khoảng trắng bên trong từ) và dấu cách. Hãy dùng stringstream để tách các từ. Các khoảng trắng liên tiếp, đầu và cuối dòng không tạo ra từ rỗng.",
    "inputDescription": "Một dòng chứa chuỗi S (có thể rỗng hoặc chỉ chứa khoảng trắng).",
    "outputDescription": "Dòng đầu in số lượng từ. Mỗi dòng tiếp theo in một từ theo thứ tự ban đầu.",
    "constraints": "0 ≤ |S| ≤ 100000; mỗi từ gồm các chữ cái tiếng Anh.",
    "samples": [
      {
        "input": "  hoc   lap  trinh   ",
        "output": "3\nhoc\nlap\ntrinh"
      }
    ],
    "tests": [
      {
        "input": "  hoc   lap  trinh   ",
        "output": "3\nhoc\nlap\ntrinh"
      },
      {
        "input": "one",
        "output": "1\none"
      },
      {
        "input": "   ",
        "output": "0"
      },
      {
        "input": " a    b c ",
        "output": "3\na\nb\nc"
      },
      {
        "input": "",
        "output": "0"
      }
    ]
  },
  {
    "id": "day12-02",
    "day": 12,
    "title": "Đếm số từ phân biệt",
    "description": "Cho một dòng văn bản. Hãy tách từ bằng stringstream và đếm số từ phân biệt. Khi so sánh từ, không phân biệt chữ hoa và chữ thường (Hoc và hoc là cùng một từ).",
    "inputDescription": "Một dòng chứa chuỗi S, các từ chỉ gồm chữ cái tiếng Anh, cách nhau bởi một hoặc nhiều dấu cách.",
    "outputDescription": "In một số nguyên là số từ phân biệt.",
    "constraints": "0 ≤ |S| ≤ 100000; không chứa dấu câu.",
    "samples": [
      {
        "input": "Hoc lap trinh hoc LAP",
        "output": "3"
      }
    ],
    "tests": [
      {
        "input": "Hoc lap trinh hoc LAP",
        "output": "3"
      },
      {
        "input": "A a A b B",
        "output": "2"
      },
      {
        "input": "   ",
        "output": "0"
      },
      {
        "input": "cpp Cpp CPP python PYTHON",
        "output": "2"
      },
      {
        "input": " one   two  three  ",
        "output": "3"
      }
    ]
  },
  {
    "id": "day12-03",
    "day": 12,
    "title": "Tìm từ dài nhất trong câu",
    "description": "Cho một dòng văn bản. Hãy dùng stringstream tìm từ có số ký tự lớn nhất. Nếu có nhiều từ cùng độ dài lớn nhất, chọn từ xuất hiện sớm nhất. Giữ nguyên cách viết hoa/thường của từ. Nếu dòng không có từ nào, in EMPTY 0.",
    "inputDescription": "Một dòng chứa chuỗi S, các từ gồm chữ cái tiếng Anh, cách nhau bởi một hoặc nhiều dấu cách.",
    "outputDescription": "In từ dài nhất và độ dài của nó trên một dòng, cách nhau bởi một dấu cách.",
    "constraints": "0 ≤ |S| ≤ 100000.",
    "samples": [
      {
        "input": "to hoc laptrinh cpp",
        "output": "laptrinh 8"
      }
    ],
    "tests": [
      {
        "input": "to hoc laptrinh cpp",
        "output": "laptrinh 8"
      },
      {
        "input": "code cpp java",
        "output": "code 4"
      },
      {
        "input": " a bc def gh ",
        "output": "def 3"
      },
      {
        "input": "   ",
        "output": "EMPTY 0"
      },
      {
        "input": "x",
        "output": "x 1"
      },
      {
        "input": "hello    WORLD",
        "output": "hello 5"
      }
    ]
  },
  {
    "id": "day12-04",
    "day": 12,
    "title": "BONUS — Chuẩn hóa và sắp xếp từ",
    "description": "Cho một dòng văn bản. Hãy dùng stringstream tách từ, chuyển tất cả chữ cái thành chữ thường rồi sắp xếp các từ theo thứ tự từ điển tăng dần. Giữ nguyên các từ trùng nhau. In các từ trên một dòng và cách nhau đúng một dấu cách.",
    "inputDescription": "Một dòng chứa chuỗi S, các từ gồm chữ cái tiếng Anh, có thể có khoảng trắng thừa.",
    "outputDescription": "In danh sách từ sau khi chuẩn hóa và sắp xếp. Nếu dòng không có từ, in dòng trống.",
    "constraints": "0 ≤ |S| ≤ 100000; các từ chỉ gồm A–Z và a–z.",
    "samples": [
      {
        "input": "  Banana apple   banana Cat ",
        "output": "apple banana banana cat"
      }
    ],
    "tests": [
      {
        "input": "  Banana apple   banana Cat ",
        "output": "apple banana banana cat"
      },
      {
        "input": "Z z A a",
        "output": "a a z z"
      },
      {
        "input": "   ",
        "output": ""
      },
      {
        "input": "hello",
        "output": "hello"
      },
      {
        "input": "c b a c",
        "output": "a b c c"
      }
    ]
  }
];
