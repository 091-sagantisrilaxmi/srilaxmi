export default function json2html(data) {
 
  let html = `<table data-user="srilaxmi1515@gmail.com">
    <thead>
      <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
    </thead>
    <tbody>`;

  // Loop through each data item to create table rows
  data.forEach(row => {
    html += `<tr><td>${row.Name || ''}</td><td>${row.Age || ''}</td><td>${row.Gender || ''}</td></tr>`;
  });

  // Close the table tags
  html += `</tbody></table>`;

  return html;
}
