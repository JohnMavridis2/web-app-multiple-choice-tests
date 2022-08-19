<?php
      $db= mysqli_connect("mysql8.000webhost.com","a6312880_john","giannhs12","a6312880_tests");
      mysqli_query($db,"SET NAMES UTF8");   // μου εβγαζε error o wamp server και μου ελεγε να χρησιμοποιηδω τη mysqli αντι της mysql
	  session_start();
	  
      $res=mysqli_query($db,
     'SELECT
      	 title,score
	  FROM
	     tests_title CROSS JOIN tests_poy_ginan 
		 ON                   
         tests_title.test_id= tests_poy_ginan.test_id
      WHERE
        user_id=' . $_SESSION['id'] . '
     ORDER BY
        tests_title.test_id , pote ;	 
	 '    
   );
   
   $fora=1;
   
   $rows=mysqli_num_rows($res);
   
   for ( $i=1 ; $i <= $rows  ; $i++)
    {
	
	 $record=mysqli_fetch_array($res);
	 
	 if ($i==1)
	  {
	  
	   ?>
	   <tr>
	   <td class="td_php"> <?php echo $record['title']; ?> </td>
       <td class="td_php">1η</td>     
	   <td class="td_php"> <?php echo $record['score']; ?>  </td>
	   </tr>
	 <?php
	   $test_title_last_repeat=$record['title'];
	  
	  }
	 else
      {
	      if( $record['title'] == $test_title_last_repeat )
	     {
	       $fora=$fora+1;
	     }
	     else
         {
	      $fora=1;
	     }	 
	  ?>
	   <tr>
       <td class="td_php"> <?php echo $record['title']; ?> </td> 
	   <td class="td_php"> <?php echo $fora . "η"; ?>  </td> 
	   <td class="td_php"> <?php echo $record['score']; ?> </td>    
	   </tr>
	 <?php
	   $test_title_last_repeat=$record['title'];
	  
	  }	 
	 
	 
	}
   
   ?>