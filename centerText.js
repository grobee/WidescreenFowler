const htmlTag = document.getElementsByTagName("html")[0];
if (htmlTag) {
    htmlTag.style.display = "table";
    htmlTag.style.margin = "0 auto";
}

const mainTag = document.getElementsByTagName("main")[0];
if (mainTag) {
    mainTag.style.display = "table-cell";
    mainTag.style.verticalAlign = "middle";
}
