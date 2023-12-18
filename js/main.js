var bookmarkNameInput = document.getElementById('bookmarkName');
var bookmarkURLInput = document.getElementById('bookmarkURL');
var form = document.getElementById('form');
var bookList = [];
if (localStorage.getItem('book') != null) {
    bookList = JSON.parse(localStorage.getItem('book'))
    displayData()
}
function submitBtn() {
    var book = {
        name: bookmarkNameInput.value,
        url: bookmarkURLInput.value,
    }
    bookList.push(book)
    localStorage.setItem('book', JSON.stringify(bookList))
    console.log(bookList);
    displayData()
}
function displayData() {
    var temp = '';
    for (var i = 1; i < bookList.length; i++) {
        temp +=
            `<tr>
    <td>`+ i + `</td>
    <td>`+ bookList[i].name + `</td>
    <td><a href="`+ bookList[i].url + `" target="_blank"><button class="btn btn-success">visit</button> </a></td>
    <td>
        <button onclick="deleteBook(`+ i + `)" class="btn btn-danger">Delete</button>
    </td>
            </tr>`
    }
    document.getElementById('tableContent').innerHTML = temp;
}
function deleteBook(x) {
    bookList.splice(x, 1)
    localStorage.setItem('book', JSON.stringify(bookList))
    displayData()
}


