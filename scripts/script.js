$(document).ready(function(e) {
//Default active on home
$('#s1').addClass("active");

$('.carousel').carousel();
/*
Smooth scrolling
*/
$("#logo").click(function() {
     $('html, body').animate({
         scrollTop:        $("#1").offset().top
     }, 1000);
  return false;
 });

$("#s1").click(function() {
     $('html, body').animate({
         scrollTop:        $("#1").offset().top
     }, 1000);
  return false;
 });

$("#s2").click(function() {
     $('html, body').animate({
         scrollTop:        $("#2").offset().top-125
     }, 1000);
  return false;
 });

$("#s3").click(function() {
     $('html, body').animate({
         scrollTop:        $("#3").offset().top-125
     }, 1000);
  return false;
 });

$("#s4").click(function() {
     $('html, body').animate({
         scrollTop:        $("#4").offset().top-125
     }, 1000);
  return false;
 });
/*
$("#s5").click(function() {
     $('html, body').animate({
         scrollTop:        $("#5").offset().top-100
     }, 1000);
  return false;
 });
*/
/*
Using jquery waypoints to change active on scroll
*/
$('#1').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s1").addClass("active");
}, { offset: -50});

$('#2').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s2").addClass("active");
}, { offset: 115});

$('#2').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s2").addClass("active");
}, { offset: 135});

$('#3').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s3").addClass("active");
}, { offset: 115});

$('#3').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s3").addClass("active");
}, { offset: 135});

$('#4').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s4").addClass("active");
}, { offset: 115});

$('#4').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s4").addClass("active");
}, { offset: 135});
/*
$('#5').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s5").addClass("active");
}, { offset: 101 });

$('#5').waypoint(function() {
  $(".navlinks ul li").children().removeClass("active");
  $("#s5").addClass("active");
}, { offset: 99});
*/
 });