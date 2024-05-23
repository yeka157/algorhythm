const reverse = (word) => {
    let positions = [];
    let string = [];
    for (let i = 0; i < word.length; i++) {
        if (isNaN(word[i]) || word[i] === '') {
            string.push(word[i]);
            positions.push(i);
        }
    }
    string.reverse();
    let res = word.split('');
    for (let i = 0; i < positions.length; i++) {
        res[positions[i]] = string[i];
    }
    return res.join('');
}

// console.log(reverse('NEGIE1'));

const longest = (sentence) => {
    let words = sentence.split(' ');
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return `${longest} : ${longest.length} characters`;
}

// console.log(longest("Saya sangat senang mengerjakan soal algoritma"));

//API KEY 706b3af81f5548d1b6a54a26af1377a9

const countQuery = (input, query) => {
    let count = [];
    for (let i = 0; i < query.length; i++) {
        count.push(0);
    }

    for (let i = 0; i < input.length; i++) {
        if (query.includes(input[i])) {
            let index = query.indexOf(input[i]);
            count[index]++;
        }
    }
    return count;
}

// console.log(countQuery(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz']));


const subtractMatrix = (matrix) => {
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let i = 0; i<matrix.length; i++) {
        diagonal1+= matrix[i][i];
        diagonal2+= matrix[i][matrix.length - 1 - i];
    }
    return Math.abs(diagonal1 - diagonal2);
}

// console.log(subtractMatrix([[1, 2, 0], [4, 5, 6], [7, 8, 9]]));
