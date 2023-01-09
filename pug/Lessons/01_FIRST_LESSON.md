# Comments

Use `//` to add comments (amazingly those will create commented html lol)

# The word of the row

The first word of the row will be translated as the name of the tag for example

```
div ciao
<div>ciao</div>
```

# Nesting

Now, to get things inside things you use indentation, each tab means that is a sub section.

```
// .pug
div ciao
    div allacatalla
// .html
<div>ciao
    <div>
    allacatalla
    </div>
</div>
```

# Multiline

You can create multiine things if you want!

A technique would be using the `|` character, this will say to pug engine not to create a tag and render just as simple text.

```
h1
    |This will not be converted as tag
    |And this is the sezcon line
```

The second technique is to add a point (`.`) in the tag before your text multiline

```
h1.
        This will not be converted as tag
        And this is the sezcon line
```

This second way is good but you will no be able to nest other things inside that. Because pug will no longer understand when you want to create a tag.
