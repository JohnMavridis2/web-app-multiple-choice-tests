       // το script κατα τη συμπληρωση του τεστ 
		 
		//η μεταβλητη ap ειναι ενα jQuery συνολο που αναφερεται στις απαντησεις των ερωτησεων
	    
		var ap=$(".ap"); 
		 
	    /* ο πινακας apan_student περιεχει τις απαντησεις του μαθητη σε καθε ερωτηση του τεστ
		   τη θεση 0 την αφηνουμε null...ξεκιναμε απο την θεση 1 η οποια αντιστοιχει στην πρωτη ερωτηση του τεστ */
	    var apan_student= [null,null,null,null,null,null,null]; // NA ΘΥΜΑΣΑΙ k,l,m,n <-> a,b,c,d..oi τιμες του πινακα θα ειναι k,l,m,n
	    
		//οταν ο χρηστης κανει κλικ σε καποια απο τις απαντησεις...τρεχει αυτος ο κωδικας
		//που αναλαμβανει 
		// 1)να δειξει ποια απαντηση της ερωτησης εχει διαλεξει ο μαθητης
		// 2)να βαλει την απαντηση στο σωστο στοιχειο του πινακα apan_student (SOOOS....αυτο θελει προσοχη) 
	      
		ap.click(simplirosi_test);  
			
		function simplirosi_test()
         {
		 
		 // σε ποια απαντηση εγινε κλικ
		 var ap_click=$(this);  
         //er_click is a string..εχει μεσα το img src (το οποιο σκεφτομαι σαν id για την απαντηση)!!! μεσω αυτου θα βρω σε ποια ερωτηση+σε ποια απαντηση εγινε κλικ		 
		 var er_click=ap_click.attr('src'); 
		
		 //σε ποια ερωτηση εγινε κλικ?..σε οποια ερωτηση η search δε γυρισει -1
		 var er=1;
		 while ( er_click.search(er) == -1 )  
		  {
		     er++;
		  }
		 //σε ποια απαντηση εγινε κλικ?..σε οποια ερωτηση η search δε γυρισει -1
		 // βαζω στο img src τα k,l,m,n <-> a,b,c,d για να μπορω να τ αναγνωρισω (sooos 2 remember το τρικ που κανεις εδω)
         var answer="k"; 
		 var help=1;
		 while ( er_click.search(answer) == -1 )  
		  {                                       
		     help=help+1;
			 
		     if (help==2)
			   {
			   answer="l";
			   }
			 else if (help==3)
               {
			   answer="m";
			   }
             else 
              {
			  answer="n";			 
			  }
			  
		  }
		  
	     // η er περιεχει [1-6] την ερωτηση που εκανα κλικ 
		 //η answer περιεχει [k,l,m,n<->a,b,c,d] την απαντηση που εκανα κλικ
         
		 if (apan_student[er]==null)
			{
			ap_click.css({
			 'border-width':'3px',
			 'border-color':'green'
			});
			
			ap_click.addClass('ap_answered');
			
			apan_student[er]=answer;
			
			}
         else
		   {
             
		     ap_click.css({
			  'border-width':'3px',
			  'border-color':'green'
			 });
			 
			ap_click.addClass('ap_answered');
			
		    apan_student[er]=answer;
		     
			ap_click.siblings(".ap").css({
			  'border-width':'2px',
			  'border-color':'orange'
			});
			
			ap_click.siblings(".ap").removeClass('ap_answered');
			
		   }        
			
	    		  
		 }
		 