# Java Programs — Practical List

This website contains all 32 practicals visible in the supplied Java Programming Laboratory list (Experiments 1.1 through 8.2). Each entry shows the experiment number, sub-program number, Java source code, and sample/expected output.

## Run locally
1. Extract the ZIP.
2. Open the `java-programs` folder in VS Code.
3. Open `index.html` in a browser, or use VS Code Live Server.

## Edit or add programs
Open `js/programs.js`. Each item contains:
- `experiment`: experiment number (for example `1.1`)
- `program`: sub-program number
- `title`, `category`, `description`
- `code`: Java source code
- `output`: sample output

The programs are displayed as examples; the website does not compile or run Java code. Some file-handling examples require the named text file to exist in the same working directory when you run them locally. The package example uses two source files and includes compile instructions in its output panel.

## Deploy to Vercel
1. Create a GitHub repository named `java-programs`.
2. Upload the contents of this folder (so `index.html`, `css/`, and `js/` are at the repository root).
3. Sign in at https://vercel.com/ using GitHub.
4. Choose **Add New → Project** and import the repository.
5. Select **Other** as the framework preset. No build command is needed; use `.` as the output directory if Vercel asks for one.
6. Click **Deploy**. Vercel will provide a public URL.
7. Later, push changes to GitHub and Vercel will redeploy automatically.
