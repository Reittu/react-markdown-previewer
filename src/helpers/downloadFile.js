export default function download(data, fileName, dataType) {
    const a = document.body.appendChild(document.createElement("a"));
    a.download = fileName;
    a.href = `data:${dataType},${encodeURIComponent(data)}`;
    a.click();
    a.remove();
}