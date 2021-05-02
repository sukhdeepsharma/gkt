/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>
        <b>
          “I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.” – Ravindranath Tagore
        </b>
      </p>
      <p>
        Contact Us: GKTempleGK@gmail.com
      </p>
      <p>
        Ganga & Krishnamurthy Temple Non-Profit Tax Exempt. Donations tax deductible.
      </p>
      <p>
        Federal Employer Identification Number <b>FEIN 85-4234900</b>
      </p>
      <p>
        Copyright © 2021 Ganga & Krishnamurthy Temple. All Rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer