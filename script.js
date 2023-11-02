/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/
class Movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG() {
        return this.rating='PG';
    }
}
var mov = new Movie("casino royale","eon production","PG-13");
var mov1= new Movie("leo","7screen studios",)
console.log(mov.title)
console.log(mov1)

//2.circle radius:
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;

    }
    get radiuscircle(){
        return this.radius;
    }
    set radiuscircle(radius){
     this.circle=radius;
    }
    get colorcircle(){
        return this.color;
    }
    set colorcircle(color){
        this.color=color;
    }
    get tostring(){
        return `"circle[radius=${this.radius} ,color=${this.color}]"`
    }
    get areacircle(){
        return Math.PI *this.radius * this.radius;
    }
    get circumferencecircle(){
        return 2 * Math.PI *this.radius; 
    }
} 
var obj1 = new circle(1.0,"red"); 
console.log(obj1.radiuscircle);
obj1.radiuscircle = 2.2
console.log(obj1.radiuscircle);

console.log(obj1.colorcircle);
obj1.colorcircle = "blue";
console.log(obj1.colorcircle);
console.log(obj1.tostring);
console.log(obj1.areacircle);
console.log(obj1.circumferencecircle);
//3. Write a "person" class to hold all the details.

class person {
    constructor(name,age,gender,salary){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
    }
}
var resume = new person("saravanan",21,"male",25000 );
var resume2 = new person("ravi",20,"male",25000);
var resume3= new person ("senthil",21,"male",20000);
console.log(resume.name);
console.log(resume.age);
console.log(resume.gender);
console.log(resume.salary);

