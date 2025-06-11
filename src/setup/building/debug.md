# Debug build

A debug build allows you to use the debug [macros](../../debugging/macros.md).

To set up the build directory for a developmement environment, run:
```bash
cmake -DMAX_DEBUG=ON ..
```

You can compile as usual (with `make`), but to speed up the compilation process,
you can split the compilation tasks accross threads with the `-j` flag.
If your computer has 8 threads, the command would be: `make -j8`.

> To know how many threads your processor has, you can run `nproc`.
