import sys
import json
query=json.loads(sys.argv[0])
#MY OWN CODE:
print '{"arg":'+query["hi"]+'}'