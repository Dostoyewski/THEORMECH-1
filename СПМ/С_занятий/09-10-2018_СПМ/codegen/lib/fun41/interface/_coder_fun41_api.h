/*
 * File: _coder_fun41_api.h
 *
 * MATLAB Coder version            : 3.3
 * C/C++ source code generated on  : 09-Oct-2018 23:12:57
 */

#ifndef _CODER_FUN41_API_H
#define _CODER_FUN41_API_H

/* Include Files */
#include "tmwtypes.h"
#include "mex.h"
#include "emlrt.h"
#include <stddef.h>
#include <stdlib.h>
#include "_coder_fun41_api.h"

/* Variable Declarations */
extern emlrtCTX emlrtRootTLSGlobal;
extern emlrtContext emlrtContextGlobal;

/* Function Declarations */
extern real_T fun41(real_T x, real_T y);
extern void fun41_api(const mxArray * const prhs[2], const mxArray *plhs[1]);
extern void fun41_atexit(void);
extern void fun41_initialize(void);
extern void fun41_terminate(void);
extern void fun41_xil_terminate(void);

#endif

/*
 * File trailer for _coder_fun41_api.h
 *
 * [EOF]
 */
