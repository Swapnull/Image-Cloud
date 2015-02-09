# Image-Cloud

![My Example](/img/screenshot.png)


In the example, the image paths are pointing at icons from [Devicon](https://github.com/konpa/devicon).

I am currenly using Bootstrap 3.3.2, which is the latest release at time of development. You will need this to take advantage of popover.

## Usage
This is a small piece of jQuery that will take an external JSON file, setup with the correct fields and data, and will output images or text in a _'tag cloud'_ like format.

The images will be sized to rating \* 10px , so if it rating is 8, an image 80px \* 80px will be output.

There is also some bootstrap popover functionality current that displays the data from the name field and the data from the rating field.

## Styling
There is some styling on this currently, but it is very limited to a slight zoom on hover. In an ideal world I will eventually make this into more of a 'cloud', so have the images in some form of shape, but as it stands, that does not happen.

If anybody would like to add this CSS and then put a pull request in, that would be welcomed with open arms.
