# Debug build

A debug build allows you to use the [debug macros](../../debugging/macros.md).

To set up the build directory for a development build, run:
```bash
cmake -DMAX_DEBUG=ON ..
```

You can compile as usual (with `make`), but to speed up the compilation process,
you can split the compilation tasks across threads with the `-j` flag.
If your computer has 8 threads, the command would be: `make -j8`.

> **Note** The command `nproc` outputs your processor's thread count.
