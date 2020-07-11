## FileRenamer

### Introduction

File Renamer is a Windows application built using Angular and Electron.

This application is built to rename files inside a folder with a specific prefix [show name] followed by the episode name.

#### How it works?

Basically based on the folder name, all files will be renamed by removing unwanted text and keeping the episode name.
This application follows a simple format {Prefix}{EpisodeNumber}{FileExtension}.

### How to use the application?

1. Download the setup from Github [Releases](https://github.com/Darkness126/FileRenamer/releases)
2. Install the application
3. The application will be launched as soon as it is installed
4. Choose a folder where the files are present
5. Choose a Show name or a Prefix of your choice and click execute

![howto](/.github/images/howto.gif)

### Caution

This is an initial version of the application tested on few scenarios only. Proceed with caution.

```
I am not responsible for lost files, unknown file names, thermonuclear war,
or you getting fired because you messed up the file.
YOU are choosing to make these modifications and if you point the finger at me for messing up your files,
I will laugh at you.
```

### Contributions

Everyone is welcome to contribute to this project if you find this interesting and willing to contribute then please raise a PR by forking the repo.

### Issues and Feature Requests

Templates are provided to create tickets for both Issues and Feature requests. Please note that this is not my full-time work and expect a delay in response.

You can view existing issues and requests [here](https://github.com/Darkness126/FileRenamer/issues).

### Exception Logic

The application removes the below set of string if present in the file name.

```
'720p', '1080p', 'x264', 'x265', '480p', '360p', '10bit', 's01'
```

### License

This project is licensed under [GNU V3](/LICENSE)

[Back to the top &uparrow;](#introduction)
