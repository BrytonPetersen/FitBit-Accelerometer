# Overview

A program created to send and receive data between a FitBit Lite and its companion app on the Iphone. Acceleration data is read into a CSV for three seconds and then sent to the companion app to be processed. 

I wanted to take this data and double integrate it to find positional data. It is my understanding that that is typically bad practice and creates dramatic drift. 

This must be run in the FitBit Studio IDE.


[Software Demo Video](https://www.youtube.com/watch?v=C7C7EeUDpM8)

# Network Communication

This is peer to peer network communication. Data is taken from the sensors on the FitBit watch and then sent to the companion app for processing.

# Development Environment

Fitbit Studio 
Fitbit OS simulator

Written in JavaScript

# Useful Websites

* [FitBit guide](https://dev.fitbit.com/build/reference/web-api/)


# Future Work

This is a long ways from functional. I am satisfied with where it is now and do not know if I will come back to it. Perhaps if I can figure out the developer bridge and a good way of integrating the data. 

* Find a way to create a developer bridge on a real FitBit (not a simulator)
* Integrate the data (probably with python - not in real time)
* Beautify the display shown on the FitBit screen