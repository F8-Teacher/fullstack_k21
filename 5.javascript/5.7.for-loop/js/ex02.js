// let html = `<h1>Hello anh em</h1>`;
// document.write(html);
// document.body.innerHTML = html

let number = 10;
let column = '';
for (let i = 1; i <= number; i++) {
    column += `<td>`;
    for (let j = 1; j <= 10; j++) {
        column += `${i} x ${j} = ${i * j} <br />`;
    }
    column += `</td>`;
}
let html = `<table width="100%" cellpadding="5" cellspacing="0" border="1">
      <tr>
        ${column}
      </tr>
    </table>`;
document.write(html);    