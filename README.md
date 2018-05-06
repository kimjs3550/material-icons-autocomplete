# Material Icons Autocomplete

---
## Introducing
This package is an autocomplete plugin which let you to use [Google Material Design Icons](https://material.io/icons/).
>Material icons are beautifully crafted, delightful, and easy to use in your web, Android, and iOS projects. Learn more about material design and our process for making these icons in the system icons section of the material design guidelines.

From Google  Material Design Icons Library

---
## Before Using
* This package is BETA, which means it's in progress and it can be very unstable.
* Please report bugs [here.](https://github.com/kimjs3550/material-icons-autocomplete/issues)

---
## How to use
1. Install this package
  * Search the package on Install page
  * If you can't find one, use
  ```
  apm install material-icons-autocomplete
  ```
2. This snippet only works on the HTML(HyperText Markup Language) file. Open your HTML, and type
    ```
    icon-import
    ```
then the package will automatically create following code:
    ```
    <!-- Material Design icon font -->
    <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
    <link href='http://rawgit.com/kimjs3550/material-icons-autocomplete/master/icon-style.css' rel='stylesheet'>
    ```    

3. Type ```icon-``` then the suggestions will appear.
4. use Tab key to autocomplete the icon which you selected.
5. To find the icon you want, go to the [Material Icon Library](https://material.io/icons). You can use all the icons listed there.

---
## ChangeLog
* version 0
    * ```0.1.0``` Autocomplete support for Material icons
        * ```Update-date``` 2018-05-04
        * ```icon-date``` 2018-05-03
    * ```0.2.0``` support few style class like 'md-24'
        * ```update-date``` 2018-05-05
        * ```updated``` now you can use style class for material icons which is listed from [Material Icon Guide](http://google.github.io/material-design-icons/)
        * ```0.2.1``` patched few bugs
          * ```patch-date``` 2018-05-06
        * ```0.2.2``` patched bugs
          * ```patch-date``` 2018-05-06
          * ```patched``` Fixed icon-style.css import issue

---
## What's next?
* use ```mdi(Material Design Icon)``` keyword instead of ```icon``` because ```icon``` identifier is too common
* maybe a little panel which shows the preview of icons you made
