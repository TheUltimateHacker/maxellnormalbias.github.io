---
layout: post
category: stuff
title: VB WinForms vs. GTK#
---
Hey there, My name is Michael. I am an admin of Shifted Games Studio, and I chat on #techtalk every now and then. I also program. Though, most of my programming sticks within the realm of the .NET framework and Mono. I recently made the switch from Windows Forms and VB.NET to GTK#, which uses C#. I'm going to tell you why.

# Cross-platform development

As you may know, GTK is basically GNOME's toolkit. Who am I kidding, that's literally what GTK is. The GNOME toolkit. So, obviously it should run on Linux. Duh. If GTK# is GTK with C#, then obviously with the power of Mono, it should run on Linux, right? Can't really run a VB.NET WinForms app on there, although you can run VB console apps. But let's say you want to make a really awesome, I don't know, an Office suite. (seriously, my imagination of what things to program is seriously dry and besides "game launcher", office suite is all I can think of.) While there are some Office applications made using command-line user interfaces and TUIs for DOS and (maybe) Linux, in 2015, what grandma would use a console-based app to say, make a spreadsheet or something like that? I know I'm rambling, but my point is that although you can get console-based VB apps to work on Linux, a GUI-based app working on there is kinda better. And, GTK# will allow that.

# Not a steap learning curve.

OK. I've been using GTK# for.. I don't know, two days, and I'm already accomplishing what I could after 5 months of learning VB.NET. That's not to say C# is easy to learn on it's own, but if you know VB and the various functions and classes in the .NET framework, Mono and GTK# have most of the same features, and they're made to work in a cross-platform environment (which adds to my previous point) so really all you need to learn is the syntax. And it's not really hard to learn the C# syntax, as languages like Java use a similar syntax, and I know Java's syntax. Just don't forget your semicolons...

# Similar syntax to other languages

You know how I said that the only real thing you need to learn is the C# syntax if you switch from VB.NET to GTK#? Well, in learning that syntax, you basically know the syntax of things like Java, which basically means if you wanted to contribute to a Java project, like RandomMelon's Histacom rewrite, you just eliminated one step in the process of learning Java. Now you just have to learn the advanced things. But hey, there's books and the Internet for a reason.

Not to mention, the Unity game engine uses C# for scripts, so if you know C#, you're basically all set. That, and if you use MonoDevelop/Xamarin Studio for your projects, Unity uses that too, so you don't even need to learn the IDE, not that the IDE has to do with the actual programming, but it still helps to not have to deal with learning a new workflow.

# Conclusion

So yeah, all-in-all, if you are a VB.NET programmer, I seriously suggest making the switch over to GTK#. Your potential Linux users will thank you. Also, if you REALLY don't want to switch from Visual Studio to MonoDevelop or another IDE built for GTK#, there is a GTK# Visual Studio integration add-in... somewhere... you'll have to hunt around cyberspace and the Mono website for that. 