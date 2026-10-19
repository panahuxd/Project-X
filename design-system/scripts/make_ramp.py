"""Generate an 11-step brand ramp (50-950) around one anchor colour.

Every brand ramp puts its main colour at the SAME step (default 800), so the
semantic layer can say "primary = brand.800" for every brand and tenant.
Lighter steps spread evenly from the anchor up to near-white; darker steps
spread down to a dark floor. Hue is kept; chroma follows Tailwind's curve.

Usage: python3 make_ramp.py "#093672" [--at 800]
"""
import sys
from colorlib import hex_to_oklch, oklch_to_hex

STEPS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
L_CURVE = [0.970, 0.932, 0.882, 0.809, 0.707, 0.623, 0.546, 0.488, 0.424, 0.379, 0.282]
C_CURVE = [0.014, 0.032, 0.059, 0.105, 0.165, 0.214, 0.245, 0.243, 0.199, 0.146, 0.091]
L_TOP = 0.970

def make_ramp(anchor, at='800'):
    L0, C0, H0 = hex_to_oklch(anchor)
    i0 = STEPS.index(at)
    floor = min(L0 - 0.10, L_CURVE[-1])
    ramp = {}
    for i, step in enumerate(STEPS):
        if i == i0:
            ramp[step] = anchor.upper()
            continue
        if i < i0:   # lighter: map curve [L_TOP .. L_CURVE[i0]] onto [L_TOP .. L0]
            t = (L_TOP - L_CURVE[i]) / (L_TOP - L_CURVE[i0])
            L = L_TOP - t * (L_TOP - L0)
        else:        # darker: map curve [L_CURVE[i0] .. L_CURVE[-1]] onto [L0 .. floor]
            t = (L_CURVE[i0] - L_CURVE[i]) / (L_CURVE[i0] - L_CURVE[-1])
            L = L0 - t * (L0 - floor)
        C = C0 * C_CURVE[i] / C_CURVE[i0]
        ramp[step] = oklch_to_hex(L, C, H0)
    return ramp

if __name__ == '__main__':
    at = sys.argv[sys.argv.index('--at') + 1] if '--at' in sys.argv else '800'
    for k, v in make_ramp(sys.argv[1], at).items():
        print(k, v, 'L=%.3f C=%.3f H=%.1f' % hex_to_oklch(v))
