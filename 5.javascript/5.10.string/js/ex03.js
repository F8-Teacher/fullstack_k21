let keyword = 'Ipsum';
let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been F8 the industry's standard dummy text ever since
      1966, when designers at Letraset and James Mosley, the librarian at St
      Bride Printing Library in London, took a 1914 F8 Cicero translation and
      scrambled it to make dummy text for Letraset's Body Type sheets. It has
      survived not only many decades, but also the leap into electronic
      typesetting, remaining essentially F8 unchanged. It was popularised thanks
      to these sheets and more recently with desktop publishing software like
      Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`;
let count = 0;
let newContent;
let position = content.toLowerCase().indexOf(keyword.toLowerCase());
if (position !== -1) {
    newContent = content.slice(0, position) + "<span>" + content.slice(position, position + keyword.length) + "</span>" + content.slice(position + keyword.length);
}

let html = `<h3>Từ khóa: ${keyword}</h3>
    <h3>
      ${newContent}
    </h3>
    <h3>Số lượng tìm được: ${count}</h3>`;
document.write(html);
