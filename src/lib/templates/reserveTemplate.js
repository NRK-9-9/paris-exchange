export const reserveTemplate = `
<p>Date d'echange: <span style="color: rgb(0, 0, 0);">{{exchange_date}}</span></p>
<ul>
<li>Prenom &amp;&amp; Nom:&nbsp;&nbsp;{{from_prenom}} {{from_nom}}</li>
<li>Phone: {{phone_num}}</li>
<li>Email: {{from_email}}</li>
</ul>
<p>#####&nbsp; <span style="color: rgb(168, 41, 27);">{{serial}}&nbsp;</span> &nbsp;#####/</p>
<table style="width: 50.0282%; border-collapse: collapse; border-width: 1px; border-color: rgb(53, 152, 219);" border="1"><colgroup><col style="width: 49.9934%;"><col style="width: 49.9934%;"></colgroup>
<tbody>
<tr>
<td style="border-color: rgb(53, 152, 219);">Currency</td>
<td style="border-color: rgb(53, 152, 219);">{{currency}}</td>
</tr>
<tr>
<td style="border-color: rgb(53, 152, 219);">Currency Amount</td>
<td style="border-color: rgb(53, 152, 219);">{{currency_amount}}</td>
</tr>
<tr>
<td style="border-color: rgb(53, 152, 219);">Euro Amount</td>
<td style="border-color: rgb(53, 152, 219);">{{euro_amount}}</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>Remarque:&nbsp;</p>
<p style="padding-left: 40px;">{{remarque}}</p>`;
