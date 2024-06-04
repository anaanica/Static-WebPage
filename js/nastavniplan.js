$(function () {



  $("#txtKolegij").autocomplete({
      source: 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan',
      focus: (e, ui) => {
          e.preventDefault();
          $("#txtKolegij").val(ui.item.label);
      },
      select: (e, ui) => {
          e.preventDefault();
          $("#txtKolegij").val("");
          showKolegijDetails(ui.item.value);
      }

  });

  const showKolegijDetails = (id) => {
    
      $.ajax({
          url: 'http://www.fulek.com/VUA/supit/GetKolegij',
          data: { id },
          success: function (koleg) {
            
            var red = '';
            red = '<tr>' +
                      '    <td>' + koleg.kolegij + '</td>' +
                      '    <td>' + koleg.ects + '</td>' +
                      '    <td>' + koleg.sati + '</td>' +
                      '    <td>' + koleg.predavanja + '</td>' +
                      '    <td>' + koleg.vjezbe + '</td>' +
                      '    <td>' + koleg.tip + '</td>' + 
                      '<td><button type="button" class="btn btn-outline-danger" onclick="deleteRow(this)">Obrisi</button></td>  </tr>'
             
                       
              $('#my-tbody').append(red);
          }
      });
  };

})

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("my-table").deleteRow(i);
}




