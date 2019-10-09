var erotiseis=6; // οι συνολικες ερωτησεις του τεστ
var apan_sostes=[null,"l","n","m","k","l","k"];  // o πινακας με τις σωστες απαντησεις του τεστ
var sostes_apanthseis=0; // το πληθος των σωστων απαντησεων
var count=0; //μεσω αυτης της μεταβλητης διασχιζω το dom δεντρο και επιλεγω την καταλληλη απαντηση...σημαντικες εδω καποιες κενες κλασεις που προσθεσα στ html elements
var score=0;
$("#ypoboli_ap").click(lysh_test);

function lysh_test()
 {
   ap.unbind(); //remove event listener για κλικ πανω σε καποια απαντηση...η σελιδα αφου πατησω κλικ στην υποβολη γινεται εντελως στατικη
   
   for (var i=1;i<=erotiseis;i++)
   {
     var first_ap=$(ap[count]); 
	 // το ap[count] ειναι ενα js DOM obj linked στη πρωτη απαντηση της ερωτησης..βαζοντας το μεσα στο $() το κανω Jquery js obj 
    if (apan_sostes[i]==apan_student[i])
	 {
	  sostes_apanthseis=sostes_apanthseis+1;
      first_ap.siblings(".diorthosi_sosto").show();
      first_ap.siblings(".aitiologhsh").show();	  
	  first_ap.siblings(".eik_aitiol").show(); 
	 }
	else if (apan_student[i]==null)
	 {
	   if (first_ap.hasClass('ap_true'))
	   {
	    first_ap.css({
	    'border-width':'3px',
	    'border-color':'green'
	    });
	   }
	   else
	   {
	     first_ap.siblings(".ap_true").css({
	      'border-width':'3px',
	      'border-color':'green'
	     });
	   }
	  
	  first_ap.siblings(".diorthosi_null").show();
      first_ap.siblings(".aitiologhsh").show();	  
	  first_ap.siblings(".eik_aitiol").show(); 
	 }
	else //ο μαθητης εχει απαντησει λαθος
	 {
	 //κανουμε πρασινο το σωστο
	  if (first_ap.hasClass('ap_true'))
	   {
	    first_ap.css({
		  'border-width':'3px',
	      'border-color':'green'
		});
	   }
	  else
	   {
	    first_ap.siblings(".ap_true").css({
		  'border-width':'3px',
	      'border-color':'green'
		});
	   } 
	   
	  //κανουμε κοκκινο το λαθος ...αυτο δηλαδη που απαντησε ο μαθητης 
	   if (first_ap.hasClass('ap_answered'))
	   {
	    first_ap.css({
		  'border-width':'3px',
	      'border-color':'red'
		});
	   }
	  else
	   {
	    first_ap.siblings(".ap_answered").css({
		  'border-width':'3px',
	      'border-color':'red'
		});
	   } 
	 
	  first_ap.siblings(".diorthosi_la8os").show();
      first_ap.siblings(".aitiologhsh").show();	  
	  first_ap.siblings(".eik_aitiol").show(); 
	 }
	 
	 //πριν παω στην επομενη λουπα/ερωτηση αυξανω καταλληλα το count
	 //ωστε να δειχνει στην πρωτη απαντηση της επομενης ερωτησης
	 //αναλογα με το ποσες πιθανες απαντησεις εχει η ερωτηση το count αυξανεται καταλληλα 
	 if (first_ap.hasClass('pith_ap_2'))
	  {
	    count=count+2;
	  }
	 else
	  {
	   count=count+4;
	  }
	  
   }
   
  $("#ypoboli_ap").hide(); 
  $("#back_in_the_end").show(); 
  
  
  score=100*(sostes_apanthseis/erotiseis);
  var grade=score.toFixed(2);
  alert("Your score: " + grade + "/100");
 
 
  //με ajax στελνω score,test_id στο σερβερ...εκει ενα php script θα τ βαλει στη βαση...το user_id θα το ξερει ηδη ο server απο οταν εκανε login
  $.post( '/tests/b/bathmoi/bathmoi_2_db.php' , { bathmos : grade , testid: 1 }    );
   
  
  
 }
 
 