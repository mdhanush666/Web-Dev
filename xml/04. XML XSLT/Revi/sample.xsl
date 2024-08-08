<?xml version = "1.0" encoding = "UTF-8"?>

<xsl:stylesheet version = "1.0"
                xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

  <xsl:template match = "movies">

    <html>
      <body bgcolor = "lightblue">
        
        <table border = "1" cellspacing = "0" cellpadding = "5">

          <tr bgcolor = "gray">
            <th>Name</th>
            <th>Director</th>
            <th>Release</th>
          </tr>

          <xsl:for-each select = "movie">

            <xsl:choose>

              <xsl:when test = "imdb &gt;= 7.5">
                <tr bgcolor = "lightgreen">
                  <td>
                    <xsl:value-of select = "name"/>
                  </td>
                  <td>
                    <xsl:value-of select = "director"/>
                  </td>
                  <td>
                    <xsl:value-of select = "release"/>
                  </td>
                </tr>
              </xsl:when>

              <xsl:otherwise>
                <tr bgcolor = "orange">
                  <td>
                    <xsl:value-of select = "name"/>
                  </td>
                  <td>
                    <xsl:value-of select = "director"/>
                  </td>
                  <td>
                    <xsl:value-of select = "release"/>
                  </td>
                </tr>
              </xsl:otherwise>

            </xsl:choose>

          </xsl:for-each>

        </table>

      </body>
    </html>

  </xsl:template>

</xsl:stylesheet>