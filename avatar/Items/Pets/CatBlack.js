
import React, {useState} from 'react'
import { useInterval } from '../../../hooks/useInterval';
import { Path } from 'react-native-svg'
import colors from "../../../../config/colors";
import { useSelector } from "react-redux";

export const CatBlack = () => {
    const localColours = [colors.yellow7, colors.night_blue, colors.star_yellow];
    let [eyesOpen, setEyesOpen] = useState(true);
    function setEyes(){
      setEyesOpen(!eyesOpen)
    }
    useInterval(() => {
      setEyes();
    }, eyesOpen ? Math.random() * (5000 - 2000) + 2000 : 200);
    return (
        <>
           <Path id="catOutline"
        fill={localColours[0]}
        d="M 206.00,2325.00
           C 213.51,2326.72 224.76,2334.31 228.00,2326.09
             228.00,2326.09 239.00,2326.09 239.00,2326.09
             244.87,2326.88 243.41,2328.00 252.00,2328.00
             261.78,2328.00 260.14,2326.11 269.00,2326.00
             284.89,2325.81 281.45,2327.95 292.00,2328.00
             292.00,2328.00 313.00,2330.00 313.00,2330.00
             313.00,2330.00 325.00,2330.00 325.00,2330.00
             325.00,2330.00 345.00,2331.91 345.00,2331.91
             345.00,2331.91 363.00,2331.91 363.00,2331.91
             368.27,2331.19 367.72,2330.09 375.00,2330.00
             375.00,2330.00 395.00,2328.00 395.00,2328.00
             395.00,2328.00 403.00,2328.00 403.00,2328.00
             411.01,2327.90 409.57,2326.96 416.04,2324.08
             420.46,2322.11 425.23,2320.48 428.96,2317.28
             432.53,2314.21 441.57,2300.19 443.84,2295.72
             443.84,2295.72 449.50,2283.00 449.50,2283.00
             453.68,2274.64 457.16,2266.30 458.68,2257.00
             458.68,2257.00 459.18,2250.00 459.18,2250.00
             459.91,2244.00 460.96,2245.80 461.00,2237.00
             461.00,2237.00 461.00,2204.00 461.00,2204.00
             460.98,2189.60 452.94,2176.79 449.75,2163.00
             448.61,2158.09 449.33,2156.28 448.82,2152.00
             448.82,2152.00 447.32,2145.00 447.32,2145.00
             447.32,2145.00 446.82,2138.00 446.82,2138.00
             446.82,2138.00 445.32,2131.00 445.32,2131.00
             443.01,2117.12 442.98,2113.90 443.00,2100.00
             443.02,2089.58 444.02,2092.60 445.00,2086.00
             445.00,2086.00 445.00,2080.00 445.00,2080.00
             445.00,2080.00 446.68,2073.00 446.68,2073.00
             446.68,2073.00 447.51,2066.00 447.51,2066.00
             450.31,2052.23 455.80,2039.12 460.63,2026.00
             460.63,2026.00 469.04,2000.00 469.04,2000.00
             469.04,2000.00 478.99,1979.00 478.99,1979.00
             478.99,1979.00 482.49,1968.00 482.49,1968.00
             483.40,1963.95 483.00,1962.58 484.71,1958.01
             484.71,1958.01 487.86,1951.72 487.86,1951.72
             490.47,1946.30 492.92,1938.00 493.00,1932.00
             493.00,1932.00 493.00,1896.00 493.00,1896.00
             492.90,1888.20 488.24,1872.99 478.99,1872.22
             477.25,1872.08 474.98,1872.31 473.51,1873.31
             471.72,1874.53 470.64,1877.77 469.54,1879.72
             469.54,1879.72 460.55,1895.42 460.55,1895.42
             460.55,1895.42 451.96,1912.27 451.96,1912.27
             448.86,1917.13 444.71,1920.23 442.59,1925.04
             442.59,1925.04 436.52,1946.00 436.52,1946.00
             436.52,1946.00 431.76,1961.00 431.76,1961.00
             431.76,1961.00 426.52,1984.00 426.52,1984.00
             424.32,1992.48 419.25,2009.18 411.00,2013.00
             411.00,2013.00 398.77,1979.72 398.77,1979.72
             398.77,1979.72 395.71,1963.04 395.71,1963.04
             395.71,1963.04 393.00,1954.00 393.00,1954.00
             393.00,1954.00 387.00,1956.00 387.00,1956.00
             387.00,1956.00 384.07,1941.00 384.07,1941.00
             383.93,1935.86 386.26,1934.23 386.60,1931.00
             386.90,1928.15 385.43,1926.29 385.34,1924.00
             385.34,1924.00 386.34,1918.00 386.34,1918.00
             386.34,1918.00 384.53,1907.00 384.53,1907.00
             384.36,1903.32 385.21,1902.87 385.54,1900.00
             386.20,1894.16 383.86,1887.69 383.09,1882.00
             383.09,1882.00 383.09,1864.00 383.09,1864.00
             383.01,1859.46 384.55,1848.51 385.52,1844.00
             387.00,1837.06 388.90,1836.31 389.00,1828.00
             389.03,1824.82 389.48,1818.17 387.15,1815.85
             384.01,1812.74 378.43,1815.16 375.28,1817.01
             375.28,1817.01 355.05,1830.73 355.05,1830.73
             355.05,1830.73 349.92,1836.27 349.92,1836.27
             349.92,1836.27 341.48,1843.90 341.48,1843.90
             339.00,1845.01 333.16,1844.02 330.00,1843.90
             330.00,1843.90 303.00,1843.90 303.00,1843.90
             289.86,1843.98 293.00,1841.36 285.64,1833.35
             285.64,1833.35 277.67,1825.24 277.67,1825.24
             277.67,1825.24 272.88,1818.76 272.88,1818.76
             272.88,1818.76 263.29,1809.76 263.29,1809.76
             255.58,1802.97 251.11,1806.96 251.00,1816.00
             251.00,1816.00 251.00,1832.00 251.00,1832.00
             251.09,1839.28 252.19,1838.73 253.00,1844.00
             253.00,1844.00 253.00,1854.00 253.00,1854.00
             253.00,1854.00 255.00,1862.00 255.00,1862.00
             255.00,1862.00 255.00,1870.00 255.00,1870.00
             255.00,1870.00 256.91,1878.00 256.91,1878.00
             256.91,1878.00 256.91,1893.00 256.91,1893.00
             257.04,1901.79 258.11,1900.04 258.91,1906.00
             258.91,1906.00 258.91,1918.00 258.91,1918.00
             259.02,1930.90 264.84,1935.09 265.00,1948.00
             265.00,1948.00 265.00,1971.00 265.00,1971.00
             264.96,1979.79 263.89,1978.04 263.00,1984.00
             263.00,1984.00 263.00,1992.00 263.00,1992.00
             263.00,1992.00 261.32,1999.00 261.32,1999.00
             261.32,1999.00 260.66,2005.00 260.66,2005.00
             260.66,2005.00 257.32,2015.00 257.32,2015.00
             256.08,2020.82 253.03,2037.66 253.00,2043.00
             253.00,2043.00 253.00,2054.00 253.00,2054.00
             252.88,2063.78 249.45,2077.29 247.45,2087.00
             247.45,2087.00 242.24,2115.00 242.24,2115.00
             242.24,2115.00 237.52,2130.00 237.52,2130.00
             237.52,2130.00 236.82,2140.00 236.82,2140.00
             236.82,2140.00 235.18,2148.00 235.18,2148.00
             235.18,2148.00 234.68,2155.00 234.68,2155.00
             234.68,2155.00 233.18,2162.00 233.18,2162.00
             233.18,2162.00 232.68,2169.00 232.68,2169.00
             232.68,2169.00 229.32,2185.00 229.32,2185.00
             229.32,2185.00 228.68,2191.00 228.68,2191.00
             228.68,2191.00 227.18,2198.00 227.18,2198.00
             227.18,2198.00 226.68,2205.00 226.68,2205.00
             225.26,2213.71 223.02,2215.91 222.95,2226.00
             222.95,2226.00 222.95,2247.00 222.95,2247.00
             222.95,2247.00 221.18,2256.00 221.18,2256.00
             221.18,2256.00 220.68,2263.00 220.68,2263.00
             219.26,2271.71 217.02,2273.91 217.00,2284.00
             217.00,2286.82 217.23,2291.35 216.30,2293.91
             215.05,2297.36 212.67,2298.12 210.67,2303.04
             208.46,2308.46 209.42,2311.56 208.59,2314.96
             207.39,2319.85 206.22,2317.49 206.00,2325.00 Z
           M 364.00,1839.00
           C 364.00,1839.00 365.00,1848.00 365.00,1848.00
             365.00,1848.00 367.00,1848.00 367.00,1848.00
             367.63,1841.30 369.26,1838.67 376.00,1837.00
             376.00,1839.54 376.23,1844.71 375.41,1846.91
             373.92,1850.86 371.04,1850.42 370.17,1859.00
             370.17,1859.00 369.00,1883.00 369.00,1883.00
             369.00,1883.00 370.00,1903.00 370.00,1903.00
             370.00,1903.00 371.16,1920.00 371.16,1920.00
             371.16,1920.00 371.16,1944.00 371.16,1944.00
             372.31,1949.89 375.40,1955.38 377.33,1961.00
             377.33,1961.00 385.44,1984.00 385.44,1984.00
             387.14,1988.06 387.10,1990.56 391.00,1993.00
             391.00,1993.00 397.65,2014.00 397.65,2014.00
             397.65,2014.00 402.68,2036.00 402.68,2036.00
             402.68,2036.00 403.18,2045.00 403.18,2045.00
             403.18,2045.00 405.00,2053.00 405.00,2053.00
             405.00,2053.00 405.00,2061.00 405.00,2061.00
             405.00,2061.00 409.00,2087.00 409.00,2087.00
             409.00,2087.00 409.00,2107.00 409.00,2107.00
             409.00,2107.00 410.91,2121.00 410.91,2121.00
             410.91,2121.00 410.91,2139.00 410.91,2139.00
             410.91,2139.00 405.00,2139.00 405.00,2139.00
             411.29,2149.91 407.81,2147.91 409.21,2158.00
             409.21,2158.00 410.63,2164.00 410.63,2164.00
             410.63,2164.00 412.98,2186.00 412.98,2186.00
             412.82,2192.04 410.98,2192.37 410.06,2197.00
             410.06,2197.00 410.06,2210.00 410.06,2210.00
             410.06,2210.00 408.22,2219.00 408.22,2219.00
             407.71,2225.66 413.52,2241.92 405.00,2245.00
             405.00,2245.00 406.00,2234.00 406.00,2234.00
             401.35,2240.53 400.04,2248.34 398.53,2256.00
             397.66,2260.39 396.87,2260.03 397.00,2265.00
             393.05,2268.93 391.85,2273.59 393.00,2279.00
             393.00,2279.00 395.00,2279.00 395.00,2279.00
             395.00,2279.00 404.00,2247.00 404.00,2247.00
             404.00,2247.00 407.00,2247.00 407.00,2247.00
             407.00,2259.84 405.76,2255.87 405.10,2263.00
             404.80,2266.32 405.37,2271.84 404.53,2274.72
             403.37,2278.73 398.95,2285.52 398.09,2293.00
             397.37,2299.21 397.03,2307.27 403.00,2311.00
             403.00,2311.00 403.00,2315.00 403.00,2315.00
             403.00,2315.00 396.00,2317.45 396.00,2317.45
             396.00,2317.45 376.00,2320.00 376.00,2320.00
             376.00,2320.00 360.00,2321.91 360.00,2321.91
             360.00,2321.91 348.00,2321.91 348.00,2321.91
             348.00,2321.91 330.00,2319.91 330.00,2319.91
             330.00,2319.91 314.00,2319.91 314.00,2319.91
             314.00,2319.91 304.00,2318.00 304.00,2318.00
             304.00,2318.00 304.00,2314.00 304.00,2314.00
             304.00,2314.00 301.00,2314.00 301.00,2314.00
             301.00,2314.00 301.00,2317.91 301.00,2317.91
             301.00,2317.91 290.00,2317.91 290.00,2317.91
             290.00,2317.91 276.00,2316.00 276.00,2316.00
             276.00,2316.00 255.00,2315.00 255.00,2315.00
             251.88,2319.60 248.79,2316.75 244.00,2316.09
             244.00,2316.09 221.00,2316.09 221.00,2316.09
             222.49,2311.51 227.24,2305.47 227.92,2298.00
             228.20,2294.86 226.07,2287.75 227.32,2280.00
             227.32,2280.00 230.49,2267.00 230.49,2267.00
             230.49,2267.00 233.00,2246.00 233.00,2246.00
             233.00,2246.00 233.00,2229.00 233.00,2229.00
             233.02,2218.91 235.26,2216.71 236.68,2208.00
             236.68,2208.00 237.32,2200.00 237.32,2200.00
             237.32,2200.00 242.49,2173.00 242.49,2173.00
             242.49,2173.00 243.32,2164.00 243.32,2164.00
             243.32,2164.00 244.82,2157.00 244.82,2157.00
             244.82,2157.00 245.32,2150.00 245.32,2150.00
             245.32,2150.00 246.82,2143.00 246.82,2143.00
             246.82,2143.00 247.32,2134.00 247.32,2134.00
             247.32,2134.00 252.49,2117.00 252.49,2117.00
             252.49,2117.00 255.32,2100.00 255.32,2100.00
             255.32,2100.00 258.68,2084.00 258.68,2084.00
             258.68,2084.00 259.32,2078.00 259.32,2078.00
             261.20,2066.73 262.85,2065.62 263.00,2053.00
             263.00,2053.00 266.68,2028.00 266.68,2028.00
             266.68,2028.00 267.34,2018.00 267.34,2018.00
             267.34,2018.00 270.45,2009.00 270.45,2009.00
             270.45,2009.00 271.18,2003.00 271.18,2003.00
             271.18,2003.00 273.00,1995.00 273.00,1995.00
             273.00,1995.00 273.00,1987.00 273.00,1987.00
             273.81,1981.73 274.91,1982.28 275.00,1975.00
             275.00,1975.00 275.00,1946.00 275.00,1946.00
             274.95,1935.49 271.48,1930.27 269.52,1921.00
             268.76,1917.42 269.02,1911.82 269.00,1908.00
             269.00,1908.00 266.91,1889.00 266.91,1889.00
             266.91,1889.00 266.91,1875.00 266.91,1875.00
             266.91,1875.00 265.00,1867.00 265.00,1867.00
             265.00,1867.00 265.00,1857.00 265.00,1857.00
             265.00,1857.00 263.32,1850.00 263.32,1850.00
             263.32,1850.00 262.82,1841.00 262.82,1841.00
             261.83,1832.73 261.00,1834.12 261.00,1824.00
             266.10,1825.59 266.07,1827.61 269.67,1831.33
             269.67,1831.33 277.63,1839.51 277.63,1839.51
             285.58,1849.29 285.96,1853.98 300.00,1854.00
             300.00,1854.00 327.00,1854.00 327.00,1854.00
             332.14,1854.03 339.49,1856.28 342.91,1855.13
             349.86,1852.81 359.19,1840.57 364.00,1839.00 Z
           M 377.00,1831.00
           C 377.00,1831.00 377.00,1835.00 377.00,1835.00
             377.00,1835.00 374.00,1835.00 374.00,1835.00
             374.00,1835.00 374.00,1831.00 374.00,1831.00
             374.00,1831.00 377.00,1831.00 377.00,1831.00 Z
           M 481.00,1887.00
           C 482.22,1892.43 482.93,1893.11 483.00,1899.00
             483.00,1899.00 483.00,1927.00 483.00,1927.00
             482.95,1931.14 480.65,1942.20 479.18,1946.00
             479.18,1946.00 474.69,1957.00 474.69,1957.00
             474.69,1957.00 467.85,1979.00 467.85,1979.00
             467.85,1979.00 460.15,1993.00 460.15,1993.00
             460.15,1993.00 451.29,2020.96 451.29,2020.96
             451.29,2020.96 447.83,2028.09 447.83,2028.09
             447.83,2028.09 445.33,2037.00 445.33,2037.00
             439.05,2056.44 437.29,2062.61 434.82,2083.00
             434.09,2089.00 433.04,2087.20 433.00,2096.00
             433.00,2096.00 433.00,2119.00 433.00,2119.00
             433.00,2119.00 438.68,2154.00 438.68,2154.00
             438.68,2154.00 439.75,2166.00 439.75,2166.00
             442.61,2178.33 450.85,2192.83 451.00,2205.00
             451.00,2205.00 451.00,2235.00 451.00,2235.00
             450.91,2242.29 449.83,2241.69 449.18,2247.00
             449.18,2247.00 448.68,2254.00 448.68,2254.00
             446.97,2264.51 443.16,2272.61 438.50,2282.00
             436.44,2286.16 430.14,2299.64 426.53,2301.95
             424.50,2303.26 422.13,2302.39 419.32,2303.76
             415.04,2305.84 416.43,2307.96 409.00,2309.00
             409.00,2309.00 415.00,2271.00 415.00,2271.00
             415.02,2258.44 419.37,2253.34 422.24,2242.00
             423.29,2237.87 422.75,2236.60 423.18,2233.00
             423.18,2233.00 424.84,2226.00 424.84,2226.00
             424.84,2226.00 424.84,2213.00 424.84,2213.00
             424.89,2204.31 423.02,2205.92 422.95,2195.00
             422.95,2195.00 422.95,2174.00 422.95,2174.00
             422.39,2167.52 421.02,2169.41 421.08,2159.00
             421.08,2159.00 421.08,2141.00 421.08,2141.00
             421.08,2141.00 423.90,2124.00 423.90,2124.00
             423.90,2124.00 422.29,2103.00 422.29,2103.00
             422.29,2103.00 422.29,2092.00 422.29,2092.00
             422.29,2092.00 418.01,2077.00 418.01,2077.00
             418.01,2077.00 415.00,2053.00 415.00,2053.00
             418.89,2054.35 418.74,2055.23 420.00,2059.00
             421.00,2055.48 421.68,2051.46 419.27,2048.30
             416.95,2045.26 412.82,2045.35 413.85,2040.00
             415.69,2030.45 430.64,2006.51 432.18,2002.00
             432.18,2002.00 440.48,1973.00 440.48,1973.00
             440.48,1973.00 441.76,1964.00 441.76,1964.00
             441.76,1964.00 446.26,1950.00 446.26,1950.00
             448.41,1942.28 450.12,1934.12 454.04,1927.04
             456.10,1923.32 457.25,1922.76 459.44,1919.69
             465.86,1910.65 463.62,1911.66 467.53,1904.01
             467.53,1904.01 472.49,1895.91 472.49,1895.91
             475.20,1891.06 475.06,1888.03 481.00,1887.00 Z
           M 387.00,1997.00
           C 387.00,1997.00 387.00,2020.00 387.00,2020.00
             387.00,2020.00 389.00,2020.00 389.00,2020.00
             389.00,2020.00 389.00,1997.00 389.00,1997.00
             389.00,1997.00 387.00,1997.00 387.00,1997.00 Z
           M 393.00,2087.00
           C 393.00,2087.00 393.00,2091.00 393.00,2091.00
             393.00,2091.00 395.00,2091.00 395.00,2091.00
             395.00,2091.00 395.00,2087.00 395.00,2087.00
             395.00,2087.00 393.00,2087.00 393.00,2087.00 Z" />
             <Path id="catFill"
        fill={localColours[1]}
        d="M 408.00,2030.00
           C 407.56,2020.93 401.04,1998.56 397.26,1990.17
             397.26,1990.17 391.58,1980.00 391.58,1980.00
             391.58,1980.00 384.33,1959.00 384.33,1959.00
             380.70,1948.43 378.02,1947.07 377.95,1935.00
             377.95,1935.00 377.95,1914.00 377.95,1914.00
             377.39,1907.52 376.02,1909.41 376.00,1899.00
             376.00,1899.00 376.00,1867.00 376.00,1867.00
             376.14,1855.87 379.78,1857.03 381.46,1850.91
             382.71,1846.32 380.90,1845.58 384.00,1836.00
             385.21,1832.27 387.64,1825.13 383.49,1822.32
             378.99,1819.27 369.63,1824.83 366.00,1827.72
             366.00,1827.72 355.75,1834.76 355.75,1834.76
             355.75,1834.76 351.95,1839.49 351.95,1839.49
             350.57,1841.00 342.60,1847.08 340.82,1847.59
             339.00,1848.12 332.79,1847.04 330.00,1847.00
             330.00,1847.00 302.00,1847.00 302.00,1847.00
             299.09,1847.00 295.86,1847.20 293.18,1845.92
             288.84,1843.84 286.74,1839.31 283.88,1835.76
             283.88,1835.76 274.67,1826.24 274.67,1826.24
             274.67,1826.24 269.18,1819.16 269.18,1819.16
             268.03,1818.11 266.39,1817.20 264.96,1816.59
             252.66,1811.27 253.91,1823.08 254.00,1831.00
             254.09,1838.28 255.19,1837.73 255.82,1843.00
             255.82,1843.00 256.32,1852.00 256.32,1852.00
             256.32,1852.00 258.00,1859.00 258.00,1859.00
             258.00,1859.00 258.00,1869.00 258.00,1869.00
             258.00,1869.00 259.91,1877.00 259.91,1877.00
             259.91,1877.00 259.91,1892.00 259.91,1892.00
             259.91,1892.00 262.09,1911.00 262.09,1911.00
             262.09,1911.00 262.09,1921.00 262.09,1921.00
             262.97,1927.53 267.87,1936.62 267.95,1947.00
             267.95,1947.00 267.95,1976.00 267.95,1976.00
             267.95,1976.00 266.18,1985.00 266.18,1985.00
             266.18,1985.00 265.68,1994.00 265.68,1994.00
             265.68,1994.00 264.32,2000.00 264.32,2000.00
             264.32,2000.00 263.45,2007.00 263.45,2007.00
             262.51,2010.75 260.77,2012.58 260.19,2017.00
             260.19,2017.00 259.68,2026.00 259.68,2026.00
             259.68,2026.00 256.00,2051.00 256.00,2051.00
             255.85,2063.62 254.20,2064.73 252.32,2076.00
             252.32,2076.00 251.68,2082.00 251.68,2082.00
             251.68,2082.00 248.32,2098.00 248.32,2098.00
             248.32,2098.00 245.24,2116.00 245.24,2116.00
             245.24,2116.00 240.52,2131.00 240.52,2131.00
             240.52,2131.00 239.82,2141.00 239.82,2141.00
             239.82,2141.00 238.18,2149.00 238.18,2149.00
             238.18,2149.00 237.68,2156.00 237.68,2156.00
             237.68,2156.00 236.18,2163.00 236.18,2163.00
             236.18,2163.00 235.68,2170.00 235.68,2170.00
             235.68,2170.00 232.32,2186.00 232.32,2186.00
             232.32,2186.00 231.68,2192.00 231.68,2192.00
             231.68,2192.00 230.18,2199.00 230.18,2199.00
             230.18,2199.00 229.68,2206.00 229.68,2206.00
             228.57,2212.83 226.09,2217.65 225.96,2225.00
             225.96,2225.00 225.96,2248.00 225.96,2248.00
             225.96,2248.00 224.32,2256.00 224.32,2256.00
             224.32,2256.00 223.82,2263.00 223.82,2263.00
             222.76,2271.71 220.02,2274.06 220.16,2285.00
             220.16,2285.00 220.16,2298.00 220.16,2298.00
             219.03,2308.82 212.08,2305.57 212.08,2315.00
             212.08,2323.58 217.20,2322.99 224.00,2323.00
             224.00,2323.00 237.00,2323.00 237.00,2323.00
             245.78,2323.04 246.91,2324.92 252.00,2324.92
             256.08,2324.92 258.26,2323.63 262.00,2323.09
             262.00,2323.09 274.00,2323.09 274.00,2323.09
             274.00,2323.09 293.00,2325.09 293.00,2325.09
             293.00,2325.09 304.00,2325.09 304.00,2325.09
             309.27,2325.81 308.72,2326.91 316.00,2327.00
             316.00,2327.00 326.00,2327.00 326.00,2327.00
             326.00,2327.00 346.00,2328.91 346.00,2328.91
             346.00,2328.91 362.00,2328.91 362.00,2328.91
             367.27,2328.19 366.72,2327.09 374.00,2327.00
             382.86,2326.90 381.00,2326.62 389.00,2325.32
             389.00,2325.32 396.00,2324.81 396.00,2324.81
             403.14,2323.86 409.48,2319.80 415.14,2315.75
             416.76,2314.60 419.21,2313.01 421.17,2312.65
             424.29,2312.08 427.84,2313.92 430.87,2310.49
             430.87,2310.49 440.84,2294.68 440.84,2294.68
             440.84,2294.68 444.04,2287.00 444.04,2287.00
             447.62,2279.25 450.86,2274.60 453.26,2266.00
             455.31,2258.65 455.31,2256.19 456.18,2249.00
             456.91,2243.00 457.96,2244.80 458.00,2236.00
             458.00,2236.00 458.00,2205.00 458.00,2205.00
             457.98,2190.60 449.94,2177.79 446.75,2164.00
             446.75,2164.00 445.68,2152.00 445.68,2152.00
             445.68,2152.00 440.00,2116.00 440.00,2116.00
             440.00,2116.00 440.00,2099.00 440.00,2099.00
             440.02,2088.58 441.02,2091.60 441.82,2085.00
             444.13,2065.91 445.98,2058.29 452.00,2040.00
             452.00,2040.00 454.65,2031.09 454.65,2031.09
             454.65,2031.09 457.99,2023.96 457.99,2023.96
             457.99,2023.96 467.18,1995.01 467.18,1995.01
             469.41,1990.20 472.29,1988.05 475.63,1979.00
             475.63,1979.00 481.71,1957.01 481.71,1957.01
             481.71,1957.01 485.19,1949.83 485.19,1949.83
             486.97,1945.12 489.94,1933.95 490.00,1929.00
             490.00,1929.00 490.00,1897.00 490.00,1897.00
             489.91,1890.25 488.31,1879.92 479.99,1879.22
             477.83,1879.04 475.37,1879.45 473.54,1880.66
             470.81,1882.46 469.01,1887.12 467.49,1890.00
             467.49,1890.00 461.00,1901.01 461.00,1901.01
             461.00,1901.01 456.03,1911.58 456.03,1911.58
             451.03,1919.92 448.97,1919.23 444.75,1930.00
             444.75,1930.00 434.52,1963.00 434.52,1963.00
             434.52,1963.00 433.48,1971.00 433.48,1971.00
             433.48,1971.00 425.48,1999.00 425.48,1999.00
             424.23,2003.06 421.44,2006.31 419.49,2010.04
             416.33,2016.09 413.03,2025.82 408.00,2030.00 Z
           M 379.50,1887.50" />
             <Path id={eyesOpen ? "catEyes" : ""}
        fill={localColours[2]}
        d={eyesOpen ? 
        "M 277.00,1895.00 C 277.63,1897.01 277.65,1897.80 279.31,1899.36 284.76,1904.49 301.24,1904.49 306.69,1899.36 308.35,1897.80 308.37,1897.01 309.00,1895.00 309.00,1895.00 293.74,1895.99 293.74,1895.99 293.74,1895.99 292.00,1900.00 292.00,1900.00 M 312.00,1895.00 C 312.63,1897.01 312.65,1897.80 314.31,1899.36 319.73,1904.46 336.27,1904.46 341.69,1899.36 343.35,1897.80 343.37,1897.01 344.00,1895.00 344.00,1895.00 327.59,1896.02 327.59,1896.02 327.59,1896.02 326.00,1899.00 326.00,1899.00 322.20,1893.49 318.22,1895.00 312.00,1895.00 Z" 
        : ""
        }
        />
        </>
    )
}

