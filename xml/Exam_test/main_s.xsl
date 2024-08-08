<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

  <xsl:template match = "root">
    <html>
      <body>
        <table border = "1">
          <tr>
            <th>CourseName</th>
            <th>Duration</th>
            <th>Medium</th>
            <th>Credit</th>
          </tr>

          <xsl:for-each select = "movie">

            <tr>
              <td>
                <xsl:value-of select = "CourseName"/>
              </td>
              <td>
                <xsl:value-of select = "Duration"/>
              </td>
              <td>
                <xsl:value-of select = "Medium"/>
              </td>
              <td>
                <xsl:value-of select = "Credit"/>
              </td>
            </tr>

          </xsl:for-each>

        </table>
      </body>
    </html>

  </xsl:template>
</xsl:stylesheet>
