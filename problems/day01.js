// Thêm bài mới vào mảng này. Mỗi bài cần id duy nhất, samples và ít nhất 3 tests.
export default [
  {
    id: 'day1-01', day: 1, title: 'Thao tác Vector',
    description: 'Cho n số nguyên. Thêm x vào cuối vector, sau đó xóa phần tử ở vị trí k (đánh số từ 1) của vector sau khi thêm. In vector cuối cùng. Bạn được bảo đảm 1 ≤ k ≤ n + 1.',
    inputDescription: 'Dòng 1: n. Dòng 2: n số nguyên. Dòng 3: x k.',
    outputDescription: 'In các phần tử còn lại theo đúng thứ tự, cách nhau bởi dấu cách. Nếu vector rỗng, in một dòng trống.',
    constraints: '0 ≤ n ≤ 100000; |aᵢ|, |x| ≤ 10⁹.',
    samples: [{input:'4\n1 2 3 4\n9 2', output:'1 3 4 9'}],
    tests: [{input:'4\n1 2 3 4\n9 2',output:'1 3 4 9'}, {input:'0\n\n7 1',output:''}, {input:'3\n-1 0 5\n8 4',output:'-1 0 5'}, {input:'1\n42\n-2 1',output:'-2'}]
  },
  {
    id: 'day1-02', day: 1, title: 'Lọc số chẵn',
    description: 'Tạo vector mới chỉ gồm những số chẵn trong dãy ban đầu, giữ nguyên thứ tự.',
    inputDescription: 'Dòng 1: n. Dòng 2: n số nguyên.', outputDescription: 'In các số chẵn cách nhau bởi dấu cách; nếu không có số chẵn, in dòng trống.',
    constraints:'0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',
    samples:[{input:'5\n1 2 3 4 5',output:'2 4'}],
    tests:[{input:'5\n1 2 3 4 5',output:'2 4'}, {input:'4\n-4 0 -3 8',output:'-4 0 8'}, {input:'3\n1 3 5',output:''}, {input:'0',output:''}]
  },
  {
    id: 'day1-03', day: 1, title: 'Đảo ngược Vector',
    description: 'Đảo ngược thứ tự các phần tử trong vector. Không dùng hàm reverse().',
    inputDescription:'Dòng 1: n. Dòng 2: n số nguyên.', outputDescription:'In vector sau khi đảo, các phần tử cách nhau bởi dấu cách.',
    constraints:'0 ≤ n ≤ 100000; |aᵢ| ≤ 10⁹.',
    samples:[{input:'5\n1 2 3 4 5',output:'5 4 3 2 1'}],
    tests:[{input:'5\n1 2 3 4 5',output:'5 4 3 2 1'}, {input:'1\n-7',output:'-7'}, {input:'4\n0 0 -2 8',output:'8 -2 0 0'}, {input:'0',output:''}]
  },
  {
    id: 'day1-04', day: 1, title: 'Lọc số chẵn lớn hơn X',
    description:'Tạo vector mới gồm các số vừa chẵn vừa lớn hơn X. Giữ nguyên thứ tự xuất hiện.',
    inputDescription:'Dòng 1: n và X. Dòng 2: n số nguyên.', outputDescription:'In các số thỏa mãn cách nhau bởi dấu cách; nếu không có, in dòng trống.',
    constraints:'0 ≤ n ≤ 100000; |aᵢ|, |X| ≤ 10⁹.',
    samples:[{input:'6 3\n1 2 4 6 7 8',output:'4 6 8'}],
    tests:[{input:'6 3\n1 2 4 6 7 8',output:'4 6 8'}, {input:'5 -3\n-4 -2 0 1 2',output:'-2 0 2'}, {input:'4 10\n2 4 8 10',output:''}, {input:'0 0',output:''}]
  }
];
